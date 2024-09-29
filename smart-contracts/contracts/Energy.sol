// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Energy {

    error AddressZeroDetected();
    error ZeroValueNotAllowed();
    error ProducerAlreadyRegistered();

    address public owner;
    address public energyToken;

    constructor(address _energyToken) {
        owner = msg.sender;
        energyToken = _energyToken;
    }

    struct Producer {
        uint energyCredits;
        uint pricePerUnit;
    }

    event ProducerRegistered(address producer, uint energyCredits, uint pricePerUnit);
    event UnitsUpdated(address producer, uint energyCredits);
    event PriceUpdated(address producer, uint pricePerUnits);

    mapping(address => Producer) public producers;
    mapping (address => uint) balances;

    function registerProducer(uint _energyCredits, uint _pricePerUnit) external {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (_energyCredits == 0 || _pricePerUnit == 0) revert ZeroValueNotAllowed();
        
        // Check if the producer is already registered
        if (producers[msg.sender].energyCredits != 0) revert ProducerAlreadyRegistered();
        
        // Add producer to the mapping
        producers[msg.sender] = Producer(_energyCredits, _pricePerUnit);
        
        // Emit the event to log registration
        emit ProducerRegistered(msg.sender, _energyCredits, _pricePerUnit);
    }

    function updateEnergyCredits(uint _newCredits) external {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (_nwawCredits == 0) revert ZeroValueNotAllowed();

        // Update energy credits
        producers[msg.sender].energyCredits = _newCredits;

        // Emit the event to log update
        emit UnitsUpdated(msg.sender, _newCredits);
    }

    function updatePricePerUnit(uint _newPrice) external {

        if (msg.sender == address(0)) revert AddressZeroDetected();
        if (_newPrice == 0) revert ZeroValueNotAllowed();

        producers[msg.sender].pricePerUnit = _newPrice;

        emit PriceUpdated(msg.sender, _newPrice);

    }


}