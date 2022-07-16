import { Router } from 'express'
import UserRoutes from './user.route';

const router = Router();

router.use('/user', UserRoutes);

export default router;