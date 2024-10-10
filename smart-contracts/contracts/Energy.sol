// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
contract Energy {

    /**
     * @dev Custom errors for the contract
    */
    error AddressZeroDetected();
    error ZeroValueNotAllowed();
    error ProducerAlreadyRegistered();
    error NotEnoughEnergyCredits();
    error InsufficientTokenBalance();
    error InsufficientBuyerCredits();
    error TransferFailed();
    error OnlyOwnerAllowed();
    error OnlyProducerAllowed();
    error InsufficientBalance();
    error CallerNotProducer();
    error UpdatedpriceIsSame();
    error NoListingsFound();

    address public owner;
address public energyToken;

    /**
     * @dev Array to store all producer addresses
    */
    address[] private allProducerAddresses;

    /**
     * @dev Contract constructor
     * @param _energyToken The address of the energy token contract
    */
    constructor(address _energyToken) {
        owner = msg.sender;
        energyToken = IERC20(_energyToken);
    }

    /**
     * @dev Modifier to restrict access to only the owner
    */
    modifier onlyOwner {
    require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    struct Transaction {
        uint id;
        string typeOfTx;
        uint256 amount;
        uint256 units;
        uint256 timestamp;
        address producer;
    }

    struct ListingTransaction {
        uint256 id;
        uint256 units;
        uint256 rate;
        uint256 amount;
        uint256 timestamp;
    }

    struct Listing {
        uint256 id;
        uint256 rate;
        uint256 units;
        uint256 minorder;
        uint256 maxOrder;
        uint256 timestamp;
        address producer;
        ListingTransaction[] transactions;
    }

event ProducerRegistered(address producer, uint energyCredits, uint pricePerUnit);
    event UnitsUpdated(address producer, uint energyCredits);
    event PriceUpdated(address producer, uint pricePerUnit);
    event EnergyCreditsPurchased(address buyer, address producer, uint creditAmount);
    event EnergyCreditsTransferred(address from, address to, uint creditAmount);
    event EnergyUsageTracked(address buyer, uint usageAmount);
    event ProducerWithdrawal(address producer, uint amount);
event Deposit(address user, uint amount);


    // Mapping to store registered producers
    mapping(address => Producer) public producers;

// Mapping to store balances of users
    mapping(address => uint) public balances;

// Mapping to store transactions
    mapping (address => Transaction[]) public transactions;

    // Mapping to store listings
    mapping (address => Listing) listings;



    // THIS FUNCTION SHOULD RETURN ALL LISTINGS FOR TEH MARKETPLACE. SHOULD NOT BE FOR ONLY ONE PRODUCER
    function getAllListings() public view returns (Listing[]) {
    
    }


    // I CREATED THIS FUNCTION - WILL BE CALLED EVERY TIME A BUYER/PRODUCER MAKES A TRANSACTION IN MARKETPLACE
    function addTransaction(string typeOfTx, uint amount, uint units, address producer) {
        uint id = transactions[producer].length + 1;
        Transaction tx = Transaction(id, typeOfTx, amount, units, block.timestamp, producer);
        transactions[producer].push(tx);
    }


    // I CREATED THIS FUNCTION
    function addListing(uint rate, uint units, uint minorder, uint maxorder) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
    if (rate == 0 || units == 0 || minorder == 0 || maxorder == 0) revert ZeroValueNotAllowed();
        if (listings[msg.sender].length > 0) revert ProducerAlreadyRegistered();

        uint id = listings[producer].length + 1;
        ListingTransaction tx = ListingTransaction(id, units, rate, minorder, maxorder, block.timestamp, msg.sender []);
        listings[producer].push(tx);

        emit ListingSuccessful(producer, units, rate);
    }
    

    // I worked on this part
    // Producers can update the amount of energy credits they have available
    function updateEnergyCredits(uint _newCredits) external onlyProducer {
        if (msg.sender == address(0)) revert AddressZeroDetected();

        if (producers[msg.sender].energyCredits == _newCredits) revert UpdatedpriceIsSame();

        if (_newCredits == 0) revert ZeroValueNotAllowed();

        // Update the producer’s energy credits
        listing.units = _newCredits;

        // Log the update
        emit UnitsUpdated(msg.sender, _newCredits);
    }

// Producers can update the price per energy unit they are selling
    function updatePricePerUnit(uint _newPrice) external onlyProducer {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (listing.producer == address(0)) revert NoListingsFound();
        if (listing.producer != msg.sender) revert CallerNotProducer();

        if (listing.rate == _newRate) revert UpdatedRateIsSame();
        if (_newRate == 0) revert ZeroValueNotAllowed();

        // Update the price per unit
        listing.rate = _newRate;

        // Log the price update
        emit RateUpdated(msg.sender, _newRate);
    }

// ITE YOU ARE WORKING ON THIS, REFACTOR OR GET RID OF IT AND CREATE NEW FUNCTION
    // Buyers can purchase energy credits from a specific producer
    // This transfers tokens from the buyer to the producer and updates both parties' credit balances
     // [ITEOLUWA REFACTORED THIS FUNCTION]
    function purchaseEnergyCredits(address producer, uint creditAmount) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (producer == address(0)) revert AddressZeroDetected();
        if (unitAmount == 0) revert ZeroValueNotAllowed();
        
    Producer storage _producer = producers[producer];
        
        // Make sure the producer has enough energy credits to sell
        if (_producer.energyCredits < creditAmount) revert NotEnoughEnergyCredits();
        
        // Calculate how much the buyer needs to pay in tokens
    uint totalCost = creditAmount * _producer.pricePerUnit;
        
        // Check if the buyer has enough tokens to make the purchase
        if (IERC20(energyToken).balanceOf(msg.sender) < totalCost) revert InsufficientTokenBalance();
        
    // Transfer the tokens from the buyer to the producer
        bool success = IERC20(energyToken).transferFrom(msg.sender, address(this), totalCost);
        if (!success) revert TransferFailed();

        // Deduct the sold credits from the producer's balance
        _producer.energyCredits -= creditAmount;

        // add token to producers balance
        _producer.tokenBalance += totalCost;

        // Add the purchased credits to the buyer's balance
        buyerCredits[producer][msg.sender] += creditAmount;

        // Log the purchase of energy credits
        emit EnergyCreditsPurchased(msg.sender, producer, creditAmount);
    }

    // Buyers can transfer energy credits to another user
    // This moves energy credits from the sender’s balance to the recipient’s balance
    function transferEnergyCredits(address producer, address to, uint creditAmount) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (to == address(0)) revert AddressZeroDetected();
        if (creditAmount == 0) revert ZeroValueNotAllowed();

        // Make sure the sender has enough credits for the specified producer
        uint senderCredits = buyerCredits[producer][msg.sender];
        if (senderCredits < creditAmount) revert InsufficientBuyerCredits();

        // Reduce the sender’s credit balance for that producer
        buyerCredits[producer][msg.sender] -= creditAmount;

        // Increase the recipient’s credit balance for that producer
        buyerCredits[producer][to] += creditAmount;

        // Log the transfer of energy credits
        emit EnergyCreditsTransferred(msg.sender, to, creditAmount);
    }

    // Allow producers to withdraw their balance
    // [ITEOLUWA REFACTORED THIS FUNCTION]
    function withdraw(uint amount) external onlyProducer {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (amount == 0) revert ZeroValueNotAllowed();
        
        depositedBalances[msg.sender] -= amount;
        
        require(energyToken.transfer(msg.sender, amount), "Token transfer failed");

    bool success = IERC20(energyToken).transfer(msg.sender, amount);
        if (!success) revert TransferFailed();

        emit ProducerWithdrawal(msg.sender, amount);
    }

// ITE YOU ARE WORKING ON THIS, REFACTOR OR GET RID OF IT AND CREATE NEW FUNCTION
    // Get the balance of a producer
    function getBalance() external view onlyProducer returns (uint) {
        return producers[msg.sender].tokenBalance;
    }
// Get the credit balance of a buyer from a specific producer
    function creditBalanceOf(address producer, address buyer) external view returns(uint256) {
        return buyerCredits[producer][buyer];
    }

    /**
     * @dev Function to get the token balance of this contract
     * @return The token balance of this contract
    */
    function getContractBalance() external view onlyOwner returns (uint) {
    return IERC20(energyToken).balanceOf(address(this));
    }

}