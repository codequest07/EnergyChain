import mongoose, { Schema, Document } from 'mongoose';

export interface IBuyer{
    buyerId: number;
    location: string;
    walletAddress: string;
    meterNumber: string;
    energyGenerated: number;
    energyInUse: number;
    energyInSurplus: number;
    energySold: number;
    energyBalance: number;
    energyBought: number;
}

const buyerSchema: Schema = new mongoose.Schema({
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

const Buyer = mongoose.model<IBuyer>('Buyer', buyerSchema);
export default Buyer;
