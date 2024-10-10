// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title Energy
 * @author [Your Name]
 * @notice This contract manages the energy credits marketplace. It allows producers to register and update their energy credits, buyers to purchase energy credits, and producers to withdraw their balance.
*/
contract Energy is ReentrancyGuard{

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
    error UpdatedRateIsSame();
    error NoListingsFound();

    /**
     * @dev The owner of the contract
    */
    address public owner;
    /**
     * @dev The energy token contract
    */
    IERC20 public energyToken;

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
        if (msg.sender != owner) revert OnlyOwnerAllowed();
        _;
    }

    /**
     * @dev Modifier to restrict access to only producers
    */
    modifier onlyProducer {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
        _;
    }

    /**
     * @dev Struct to represent a transaction
    */
    struct Transaction {
        uint id;
        string typeOfTx;
        uint256 amount;
        uint256 units;
        uint256 timestamp;
        address user;
    }

    /**
     * @dev Struct to represent a listing transaction
    */
    struct ListingTransaction {
        uint256 id;
        uint256 units;
        uint256 rate;
        uint256 amount;
        uint256 timestamp;
    }

    /**
     * @dev Struct to represent a listing
    */
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

    /**
     * @dev Events emitted by the contract
    */
    event ListingSuccessful(address indexed producer, uint units, uint rate);
    event UnitsUpdated(address indexed producer, uint energyCredits);
    event RateUpdated(address indexed producer, uint pricePerUnit);
    event EnergyCreditsPurchased(address indexed buyer, address producer, uint creditAmount);


    event WithdrawalSuccessful(address indexed producer, uint amount);
    event Deposit(address indexed user, uint amount);
    event MarketActivity(address indexed user, string typeOfTx, uint amount, uint units, uint timestamp);

    /**
     * @dev Mapping to store balances of users
    */
    mapping(address => uint) public balances;

    /**
     * @dev Mapping to store transactions
    */
    mapping (address => Transaction[]) public transactions;

    /**
     * @dev Mapping to store listings
    */
    mapping (address => Listing) public listings;

    /**
     * @dev Mapping to track deposited balances
    */
    mapping(address => uint) public depositedBalances;

    /**
     * @dev Function to get all listings for the marketplace
     * @return An array of all listings
    */
    function getAllListings() public view returns (Listing[] memory) {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
        Listing[] memory allListings = new Listing[](allProducerAddresses.length);
        for (uint i = 0; i < allProducerAddresses.length; i++) {
            allListings[i] = listings[allProducerAddresses[i]];
        }
        return allListings;
    }

    /**
     * @dev Function to add a transaction
     * @param typeOfTx The type of transaction
     * @param amount The amount of the transaction
     * @param units The units of the transaction
     * @param user The address of the user making the transaction
    */
    function addTransaction(string memory typeOfTx, uint amount, uint units, address user) internal {
        uint id = transactions[producer].length + 1;
        Transaction storage newTx = transactions[user].push();
        newTx.id = id;
        newTx.typeOfTx = typeOfTx;
        newTx.amount = amount;
        newTx.units = units;
        newTx.timestamp = block.timestamp;
        newTx.user = user;

        emit MarketActivity(user, typeOfTx, amount, units, timestamp);
    }

    /**
     * @dev Function for producers to register their energy credits
     * @param rate The rate per unit of energy credit
     * @param units The number of energy credits available for sale
     * @param minorder The minimum order size
     * @param maxorder The maximum order size
    */
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
    
    /**
     * @dev Function for producers to update the amount of energy credits they have available
     * @param _newCredits The new amount of energy credits
    */
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

    /**
     * @dev Function for producers to update the price per energy unit they are selling
     * @param _newRate The new price per unit
    */
    function updateRate(uint _newRate) external onlyProducer {

        Listing[] storage listing = listings[msg.sender];

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (listing.length == 0) revert NoListingsFound();
        if (listings.producer != msg.sender) revert CallerNotProducer();

        if (listing.rate == _newRate) revert UpdatedRateIsSame();
        if (_newRate == 0) revert ZeroValueNotAllowed();

        // Update the price per unit
        listing.rate = _newRate;

        // Log the price update
        emit RateUpdated(msg.sender, _newRate);
    }

    /**
     * @dev Function for users to deposit tokens
     * @param amount The amount of tokens to deposit
    */
    function deposit(uint amount) external {
        if (amount == 0) revert ZeroValueNotAllowed();
        require(energyToken.transferFrom(msg.sender, address(this), amount), "Token transfer failed");
        depositedBalances[msg.sender] += amount;
        emit Deposit(msg.sender, amount);
    }

    /**
     * @dev Function for buyers to purchase energy credits from a specific producer
     * @param producer The address of the producer
     * @param creditAmount The amount of energy credits to purchase
    */
    function purchaseEnergyCredits(address producer, uint unitAmount) external {
        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (producer == address(0)) revert AddressZeroDetected();
        if (unitAmount == 0) revert ZeroValueNotAllowed();
        
        Listing storage listing = listings[producer];
        if (listing.producer == address(0)) revert NoListingsFound();
        if (listing.units < unitAmount) revert NotEnoughEnergyCredits();
        
        // Calculate how much the buyer needs to pay in tokens
        uint totalCost = unitAmount * listing.rate;
        if (depositedBalances[msg.sender] < totalCost) revert InsufficientTokenBalance();
        
        depositedBalances[msg.sender] -= totalCost;
        balances[producer] += totalCost;

        listing.units -= unitAmount;

        uint transactionId = listing.transactions.length + 1;
        listing.transactions.push(ListingTransaction(transactionId, unitAmount, listing.rate, totalCost, block.timestamp));

        addTransaction("Purchase", totalCost, unitAmount, msg.sender);
        addTransaction("Sold", totalCost, unitAmount, producer);
        
        emit EnergyCreditsPurchased(msg.sender, producer, unitAmount);
    }

    /**
     * @dev Function for producers to withdraw their balance
     * @param amount The amount to withdraw
    */
    function withdraw(uint amount) external onlyProducer {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (amount == 0) revert ZeroValueNotAllowed();
        
        depositedBalances[msg.sender] -= amount;
        
        require(energyToken.transfer(msg.sender, amount), "Token transfer failed");

        addTransaction("Withdrawal", amount, 0, msg.sender);
        
        emit WithdrawalSuccessful(msg.sender, amount);
    }

    /**
     * @dev Function to get the balance of a producer
     * @return The balance of the producer
    */
    function getBalance() external view returns (uint) {
        if (listings[msg.sender].producer == address(0)) revert OnlyProducerAllowed();
        return balances[msg.sender];
    }

    /**
     * @dev Function to get the deposited balance of a user
     * @return The deposited balance of the user
    */
    function getDepositedBalance() external view returns (uint) {
        return depositedBalances[msg.sender];
    }

    /**
     * @dev Function to get the token balance of this contract
     * @return The token balance of this contract
    */
    function getContractBalance() external view onlyOwner returns (uint) {
        return energyToken.balanceOf(address(this));
    }
}