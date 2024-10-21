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
const sellerController_1 = require("../controllers/sellerController");
const router = express_1.default.Router();
router.post('/registerSeller', sellerController_1.registerSeller);
router.post('/loginSeller', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sellerController_1.loginSeller)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/sellerById/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sellerController_1.getSellerById)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
router.get('/allSellers', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sellerController_1.getAllSellers)(req, res);
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
