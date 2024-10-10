"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const buyerSchema = new mongoose_1.default.Schema({
    buyerId: { type: Number, required: true, unique: true },
    location: { type: String, required: true },
    walletAddress: { type: String, required: true, unique: true },
    meterNumber: { type: String, required: true },
    energyGenerated: { type: Number, default: 0 },
    energyInUse: { type: Number, default: 0 },
    energyInSurplus: { type: Number, default: 0 },
    energySold: { type: Number, default: 0 },
    energyBalance: { type: Number, default: 0 },
    energyBought: { type: Number, default: 0 }
});
const Buyer = mongoose_1.default.model('Buyer', buyerSchema);
exports.default = Buyer;
