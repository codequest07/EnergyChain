"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const sellerRouter_1 = __importDefault(require("./Routers/sellerRouter"));
const buyerRouter_1 = __importDefault(require("./Routers/buyerRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 2020;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/sellers', sellerRouter_1.default);
app.use('/api/buyers', buyerRouter_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to EnergyChain');
});
const mongodb = process.env.MONGO_URI || 'mongodb+srv://agbakwuruoluchi:9dzZZJ4Sp9gjGRNX@cluster0.wqt97.mongodb.net/EnergyChain';
mongoose_1.default.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
