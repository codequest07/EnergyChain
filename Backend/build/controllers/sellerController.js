"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSeller = exports.registerSeller = void 0;
const sellerModel_1 = __importDefault(require("../Models/sellerModel"));
//import Web3 from 'web3';
// Web3 setup for smart contract interaction
// const web3 = new Web3('http://localhost:8545');
// const contractABI = [...]; 
// const contractAddress = '0x...';
// const contract = new web3.eth.Contract(contractABI, contractAddress);
const meters = [
    { meterNumber: 'MTR123', totalEnergy: 200, energyInUse: 100 },
    { meterNumber: 'MTR456', totalEnergy: 150, energyInUse: 80 },
    { meterNumber: 'MTR789', totalEnergy: 250, energyInUse: 120 }
];
function assignMeter() {
    const meterIndex = Math.floor(Math.random() * meters.length);
    return meters[meterIndex];
}
function generateUniqueSellerId() {
    return Math.floor(Math.random() * 1000000);
}
const registerSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location, walletAddress } = req.body;
    // if (!location || walletAddress  ) {
    //     return res.status(400).json({ message: 'All fields are required' });
    //   }
    const assignedMeter = assignMeter();
    const sellerId = generateUniqueSellerId();
    const energyGenerated = assignedMeter.totalEnergy;
    const energyInUse = assignedMeter.energyInUse;
    const energyInSurplus = energyGenerated - energyInUse;
    const energySold = 0;
    const energyBalance = 0;
    const energyBought = 0;
    const newSeller = {
        sellerId,
        location,
        walletAddress,
        meterNumber: assignedMeter.meterNumber,
        energyGenerated,
        energyInUse,
        energyInSurplus,
        energySold,
        energyBalance,
        energyBought
    };
    try {
        yield sellerModel_1.default.create(newSeller);
        // Interact with the smart contract to store energy data
        // const accounts = await web3.eth.getAccounts();
        // await contract.methods
        //     .registerSeller(assignedMeter.meterNumber, energyGenerated, energyInUse)
        //     .send({ from: accounts[0] });
        res.json({
            sellerId,
            location,
            meterNumber: assignedMeter.meterNumber,
            energyGenerated,
            energyInUse,
            energyInSurplus,
            energySold,
            energyBalance,
            energyBought,
            message: 'Sucessfully Onboarded as a Seller, Welcome!'
        });
    }
    catch (error) {
        console.error('Error registering seller:', error);
        res.status(500).json({ message: 'Error registering seller.' });
    }
});
exports.registerSeller = registerSeller;
const loginSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { walletAddress } = req.body;
    if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
    }
    try {
        const seller = yield sellerModel_1.default.findOne({ walletAddress });
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }
        return res.status(200).json({
            message: 'Seller logged in successfully',
            seller
        });
    }
    catch (error) {
        console.error('Error logging in seller:', error);
        res.status(500).json({ message: 'Server error during seller login' });
    }
});
exports.loginSeller = loginSeller;
