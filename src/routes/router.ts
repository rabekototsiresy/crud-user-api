import { Router } from 'express';
// import { router as fivRoute } from './fivondronana';
import { router as userRoute } from '../routes/user'
export const router = Router();


// router.use('/fivondronana',[fivRoute]);
router.use('/user',[userRoute]);



