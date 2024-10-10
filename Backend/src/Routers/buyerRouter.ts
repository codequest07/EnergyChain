import express, { Request, Response, NextFunction } from 'express';
import { loginBuyer, registerBuyer } from '../controllers/buyerController';

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
export default router;

