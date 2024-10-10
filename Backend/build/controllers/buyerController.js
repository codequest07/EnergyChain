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
exports.loginBuyer = exports.registerBuyer = void 0;
const buyerModel_1 = __importDefault(require("../Models/buyerModel"));
const buyerMeters = [
    { meterNumber: 'BTR123', energyBought: 50, energyBalance: 100 },
    { meterNumber: 'BTR456', energyBought: 30, energyBalance: 70 },
    { meterNumber: 'BTR789', energyBought: 40, energyBalance: 90 }
];
function assignBuyerMeter() {
    const meterIndex = Math.floor(Math.random() * buyerMeters.length);
    return buyerMeters[meterIndex];
}
function generateUniqueBuyerId() {
    return Math.floor(Math.random() * 1000000);
}
const registerBuyer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { location, walletAddress } = req.body;
    if (!location || !walletAddress) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingBuyer = yield buyerModel_1.default.findOne({ $or: [{ walletAddress }] });
        if (existingBuyer) {
            return res.status(400).json({ message: 'Buyer with this wallet address already exists' });
        }
        const assignedMeter = assignBuyerMeter();
        const buyerId = generateUniqueBuyerId();
        const energyGenerated = 0;
        const energyInUse = 0;
        const energyInSurplus = 0;
        const energySold = 0;
        const energyBalance = assignedMeter.energyBalance;
        const energyBought = assignedMeter.energyBought;
        const newBuyer = {
            buyerId,
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
        yield buyerModel_1.default.create(newBuyer);
        res.json({
            buyerId,
            location,
            meterNumber: assignedMeter.meterNumber,
            energyGenerated,
            energyInUse,
            energyInSurplus,
            energySold,
            energyBalance,
            energyBought,
            message: 'Successfully Onboarded as Buyer, Welcome!'
        });
    }
    catch (error) {
        console.error('Error registering buyer:', error);
        res.status(500).json({ message: 'Error registering buyer.' });
    }
});
exports.registerBuyer = registerBuyer;
const loginBuyer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { walletAddress } = req.body;
    if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
    }
    try {
        const buyer = yield buyerModel_1.default.findOne({ walletAddress });
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        return res.status(200).json({
            message: 'Buyer logged in successfully',
            buyer
        });
    }
    catch (error) {
        console.error('Error logging in buyer:', error);
        res.status(500).json({ message: 'Server error during buyer login' });
    }
});
exports.loginBuyer = loginBuyer;
