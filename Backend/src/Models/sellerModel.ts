import mongoose from 'mongoose';

export interface ISeller {
    sellerId: number;
    location: string;
    walletAddress: string;
    meterNumber: string;
    energyGenerated: number;
    energyInUse: number;
    energyInSurplus: number;
    energySold: number;
    energyBalance: number,
    energyBought: number 
}

const sellerSchema = new mongoose.Schema<ISeller>({
    sellerId: { type: Number, required: true },
    location: { type: String, required: true },
    walletAddress : {type: String, required: true },
    meterNumber: { type: String, required: true },
    energyGenerated: { type: Number, required: true, default: 0 },
    energyInUse: { type: Number, required: true, default: 0 },
    energyInSurplus: { type: Number, required: true, default: 0 },
    energySold: { type: Number, required: true, default: 0 },
    energyBalance: { type: Number, default: 0 },
    energyBought: { type: Number, default: 0 }
});

const Seller = mongoose.model<ISeller>('Seller', sellerSchema);

export default Seller;



