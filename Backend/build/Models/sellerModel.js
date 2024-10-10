"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const sellerSchema = new mongoose_1.default.Schema({
    sellerId: { type: Number, required: true },
    location: { type: String, required: true },
    walletAddress: { type: String, required: true },
    meterNumber: { type: String, required: true },
    energyGenerated: { type: Number, required: true, default: 0 },
    energyInUse: { type: Number, required: true, default: 0 },
    energyInSurplus: { type: Number, required: true, default: 0 },
    energySold: { type: Number, required: true, default: 0 },
    energyBalance: { type: Number, default: 0 },
    energyBought: { type: Number, default: 0 }
});
const Seller = mongoose_1.default.model('Seller', sellerSchema);
exports.default = Seller;
