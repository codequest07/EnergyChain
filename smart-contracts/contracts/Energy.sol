// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Energy is ReentrancyGuard{

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
    IERC20 public energyToken;

    // Array to store all producer addresses
    address[] private allProducerAddresses;

    constructor(address _energyToken) {
        owner = msg.sender;
        energyToken = IERC20(_energyToken);
    }

    modifier onlyOwner {
        if (msg.sender != owner) revert OnlyOwnerAllowed();
        _;
    }

    modifier onlyProducer {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
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

    event ListingSuccessful(address producer, uint units, uint rate);
    event UnitsUpdated(address producer, uint energyCredits);
    event PriceUpdated(address producer, uint pricePerUnit);
    event EnergyCreditsPurchased(address buyer, address producer, uint creditAmount);
    event EnergyCreditsTransferred(address from, address to, uint creditAmount);
    event EnergyUsageTracked(address buyer, uint usageAmount);
    event ProducerWithdrawal(address producer, uint amount);
    event Deposit(address user, uint amount);

    // Mapping to store balances of users
    mapping(address => uint) public balances;

    // Mapping to store transactions
    mapping (address => Transaction[]) public transactions;

    // Mapping to store listings
    mapping (address => Listing) public listings;

    //  Mapping track deposited balances
    mapping(address => uint) public depositedBalances;



    // THIS FUNCTION SHOULD RETURN ALL LISTINGS FOR TEH MARKETPLACE. SHOULD NOT BE FOR ONLY ONE PRODUCER
    // [ITEOLUWA WORKED THIS FUNCTION]
    function getAllListings() public view returns (Listing[] memory) {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
        Listing[] memory allListings = new Listing[](allProducerAddresses.length);
        for (uint i = 0; i < allProducerAddresses.length; i++) {
            allListings[i] = listings[allProducerAddresses[i]];
        }
        return allListings;
    }


    // I CREATED THIS FUNCTION - WILL BE CALLED EVERY TIME A BUYER/PRODUCER MAKES A TRANSACTION IN MARKETPLACE
    // [ITEOLUWA REFACTORED THIS FUNCTION]
    function addTransaction(string memory typeOfTx, uint amount, uint units, address producer) internal {
        uint id = transactions[producer].length + 1;
        Transaction storage newTx = transactions[producer].push();
        newTx.id = id;
        newTx.typeOfTx = typeOfTx;
        newTx.amount = amount;
        newTx.units = units;
        newTx.timestamp = block.timestamp;
        newTx.producer = producer;
    }


    // I CREATED THIS FUNCTION [ITEOLUWA REFACTORED THIS FUNCTION]
    function addListing(uint rate, uint units, uint minorder, uint maxorder) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (rate == 0 || units == 0 || minorder == 0 || maxorder == 0) revert ZeroValueNotAllowed();
        if (listings[msg.sender].producer != address(0)) revert ProducerAlreadyRegistered();

        uint id = allProducerAddresses.length + 1;
        listings[msg.sender].id = id;
        listings[msg.sender].rate = rate;
        listings[msg.sender].units = units;
        listings[msg.sender].minorder = minorder;
        listings[msg.sender].maxOrder = maxorder;
        listings[msg.sender].timestamp = block.timestamp;
        listings[msg.sender].producer = msg.sender;
       

        allProducerAddresses.push(msg.sender);

        emit ListingSuccessful(msg.sender, units, rate);
    }
    

    // I worked on this part
    // Producers can update the amount of energy credits they have available
    function updateEnergyCredits(uint _newCredits) external onlyProducer {

        Listing[] storage listing = listings[msg.sender];

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (listing.length == 0) revert NoListingsFound();
        if (listings.producer != msg.sender) revert CallerNotProducer();

        if (listing.units == _newCredits) revert UpdatedpriceIsSame();
        if (_newCredits == 0) revert ZeroValueNotAllowed();

        // Update the producer’s energy credits
        listing.units = _newCredits;

        // Log the update
        emit UnitsUpdated(msg.sender, _newCredits);
    }

    // I will work on this too
    // Producers can update the price per energy unit they are selling
    function updateRate(uint _newPrice) external onlyProducer {

        if (msg.sender == address(0)) revert AddressZeroDetected();

        if (producers[msg.sender].pricePerUnit == _newPrice) revert UpdatedpriceIsSame();
       
        if (_newPrice == 0) revert ZeroValueNotAllowed();

        // Update the price per unit
        producers[msg.sender].pricePerUnit = _newPrice;

        // Log the price update
        emit PriceUpdated(msg.sender, _newPrice);
    }

    // [ITEOLUWA WORKED THIS FUNCTION]
    function deposit(uint amount) external {
        if (amount == 0) revert ZeroValueNotAllowed();
        require(energyToken.transferFrom(msg.sender, address(this), amount), "Token transfer failed");
        depositedBalances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);
    }

    // ITE YOU ARE WORKING ON THIS, REFACTOR OR GET RID OF IT AND CREATE NEW FUNCTION
    // Buyers can purchase energy credits from a specific producer
    // This transfers tokens from the buyer to the producer and updates both parties' credit balances
     // [ITEOLUWA REFACTORED THIS FUNCTION]
    function purchaseEnergyCredits(address producer, uint creditAmount) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (producer == address(0)) revert AddressZeroDetected();
        if (creditAmount == 0) revert ZeroValueNotAllowed();
        
        Listing storage listing = listings[producer];
        if (listing.producer == address(0)) revert NoListingsFound();
        if (listing.units < creditAmount) revert NotEnoughEnergyCredits();
        
        // Calculate how much the buyer needs to pay in tokens
        uint totalCost = creditAmount * listing.rate;
        if (depositedBalances[msg.sender] < totalCost) revert InsufficientTokenBalance();
        
        depositedBalances[msg.sender] -= totalCost;
        balances[producer] += totalCost;
      

        uint transactionId = listing.transactions.length + 1;
        listing.transactions.push(ListingTransaction(transactionId, creditAmount, listing.rate, totalCost, block.timestamp));

        addTransaction("Purchase", totalCost, creditAmount, producer);
        
        emit EnergyCreditsPurchased(msg.sender, producer, creditAmount);
    }

    // ITE YOU ARE WORKING ON THIS, REFACTOR OR GET RID OF IT AND CREATE NEW FUNCTION
    // Allow producers to withdraw their balance
    // [ITEOLUWA REFACTORED THIS FUNCTION]
    function withdraw(uint amount) external onlyProducer {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (amount == 0) revert ZeroValueNotAllowed();
        
        depositedBalances[msg.sender] -= amount;
        
        require(energyToken.transfer(msg.sender, amount), "Token transfer failed");

        addTransaction("Withdrawal", amount, 0, msg.sender);
        
        emit ProducerWithdrawal(msg.sender, amount);
    }

    // ITE YOU ARE WORKING ON THIS, REFACTOR OR GET RID OF IT AND CREATE NEW FUNCTION
    // Get the balance of a producer
     // [ITEOLUWA REFACTORED THIS FUNCTION]
     function getBalance() external view returns (uint) {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
        return balances[msg.sender];
    }

    // I {ITEOLUWA} USED THIS TO TEST WHETHER MONEY I GOING INTO THE CONTRACT
    function getDepositedBalance() external view returns (uint) {
        return depositedBalances[msg.sender];
    }

    // Get the token balance of this contract
    function getContractBalance() external view onlyOwner returns (uint) {
        return energyToken.balanceOf(address(this));
    }

}