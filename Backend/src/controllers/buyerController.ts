import Express from 'express';
import { Request, Response } from 'express';
import Buyer, { IBuyer } from '../Models/buyerModel';


const buyerMeters = [
    { meterNumber: 'BTR123', energyBought: 50, energyBalance: 100 },
    { meterNumber: 'BTR456', energyBought: 30, energyBalance: 70 },
    { meterNumber: 'BTR789', energyBought: 40, energyBalance: 90 }
];

function assignBuyerMeter() {
    const meterIndex = Math.floor(Math.random() * buyerMeters.length);
    return buyerMeters[meterIndex];
}

function generateUniqueBuyerId(): number {
    return Math.floor(Math.random() * 1000000);
}

export const registerBuyer = async (req: Request, res: Response) => {
    const { location, walletAddress } = req.body;

    if ( !location || !walletAddress) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingBuyer = await Buyer.findOne({ $or: [{ walletAddress }] });
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

        const newBuyer: IBuyer = {
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

        await Buyer.create(newBuyer);

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
    } catch (error) {
        console.error('Error registering buyer:', error);
        res.status(500).json({ message: 'Error registering buyer.' });
    }
};


export const loginBuyer = async (req: Request, res: Response) => {
    const { walletAddress } = req.body;

    if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
    }

    try {
       
        const buyer = await Buyer.findOne({ walletAddress });
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        return res.status(200).json({
            message: 'Buyer logged in successfully',
            buyer
        });

    } catch (error) {
        console.error('Error logging in buyer:', error);
        res.status(500).json({ message: 'Server error during buyer login' });
    }
};

export const getBuyerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const buyer = await Buyer.findById(id);
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        return res.status(200).json(buyer);
    } catch (error) {
        console.error('Error fetching this buyer by ID:', error);
        res.status(500).json({ message: 'Server error fetching this buyer by ID' });
    }
};

export const getAllBuyers = async (req: Request, res: Response) => {
    try {
        const buyers = await Buyer.find();
        return res.status(200).json(buyers);
    } catch (error) {
        console.error('Error fetching all buyers:', error);
        res.status(500).json({ message: 'Server error fetching all buyers' });
    }
};
