import express, { Request, Response, NextFunction } from 'express';
import { getAllBuyers, getBuyerById, loginBuyer, registerBuyer } from '../controllers/buyerController';

const router = express.Router();
   

router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await registerBuyer(req, res);
    } catch (error) {
        next(error); 
    }
});
router.post('/loginBuyer', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginBuyer(req, res);
    } catch (error) {
        next(error); 
    }
});

router.get('/buyerById/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getBuyerById(req, res);
    } catch (error) {
        next(error); 
    }
});
router.get('/allBuyers', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getAllBuyers(req, res);
    } catch (error) {
        next(error); 
    }
});

export default router;

