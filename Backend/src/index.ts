import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv'; 
import sellerRouter from './Routers/sellerRouter'
import buyerRouter from './Routers/buyerRouter'

dotenv.config();

const app = express();
const port = process.env.PORT || 2020;

app.use(cors());
app.use(express.json());
app.use('/api/sellers', sellerRouter);
app.use('/api/buyers', buyerRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to EnergyChain');
});

const mongodb = process.env.MONGO_URI || 'mongodb+srv://agbakwuruoluchi:9dzZZJ4Sp9gjGRNX@cluster0.wqt97.mongodb.net/EnergyChain';

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
