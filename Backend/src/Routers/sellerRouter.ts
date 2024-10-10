import express, { Request, Response, NextFunction } from 'express';
import { loginSeller, registerSeller } from '../controllers/sellerController';

const router = express.Router();

router.post('/registerSeller', registerSeller);

router.post('/loginSeller', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginSeller(req, res);
    } catch (error) {
        next(error);
    }
});



export default router;
