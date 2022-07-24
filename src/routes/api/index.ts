import { Request, Response, Router } from 'express';
import UserRoutes from './user.route';

const router = Router();

router.use('/user', UserRoutes);
router.use('/', (req: Request, res: Response) => res.sendStatus(200));

export default router;
