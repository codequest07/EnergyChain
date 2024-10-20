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
const express_1 = __importDefault(require("express"));
const buyerController_1 = require("../controllers/buyerController");
const router = express_1.default.Router();
router.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, buyerController_1.registerBuyer)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
router.post('/loginBuyer', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, buyerController_1.loginBuyer)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/buyerById/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, buyerController_1.getBuyerById)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/allBuyers', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, buyerController_1.getAllBuyers)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
