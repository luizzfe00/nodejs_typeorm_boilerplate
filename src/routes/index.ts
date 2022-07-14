import { Router } from "express";
import errorMiddleware from "../middlewares/error.middleware";

export class Routers {
    static route(): Router {
        const router = Router();

        router.use('/');

        router.use(errorMiddleware);
        return router;
    }
}