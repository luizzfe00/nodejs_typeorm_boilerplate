import { Router } from "express";
import { UserController } from '../../controllers/UserController';
import authMiddleware from "../../middlewares/auth.middleware";

const router = Router();
const controller = new UserController();

router.get('/', authMiddleware, controller.all);


export default router;