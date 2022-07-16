import { Router } from 'express';
import ApiRoutes from './api';

export class Routers {
    private _router: Router;

    constructor() {
        this._router = Router();
        this.route();
    }


    private route(): void {
        this._router.use('/api', ApiRoutes);
    }

    get routes(): Router {
        return this._router;
    }
}