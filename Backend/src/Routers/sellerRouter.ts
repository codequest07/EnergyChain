import express, { Request, Response, NextFunction } from 'express';
import { getAllSellers, getSellerById, loginSeller, registerSeller } from '../controllers/sellerController';

const router = express.Router();

router.post('/registerSeller', registerSeller);

router.post('/loginSeller', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginSeller(req, res);
    } catch (error) {
        next(error);
    }
});

router.get('/sellerById', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getSellerById(req, res);
    } catch (error) {
        next(error); 
    }
});

router.get('/allSellers', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getAllSellers(req, res);
    } catch (error) {
        next(error); 
    }
});



export default router;
