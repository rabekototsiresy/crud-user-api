import { Router } from 'express';
import { router as userRoute } from '../routes/user'
export const router = Router();


/**
 * route for user feature
 */
router.use('/user',[userRoute]);



