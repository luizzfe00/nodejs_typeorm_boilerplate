import express = require('express');
import { json } from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { AppDataSource } from '../utils/data-source';
import validateEnv from '../utils/validateEnv';
import { Routers } from '../routes';


export default class App {
    static async app(): Promise<express.Application> {
        const app: express.Application = express();

        AppDataSource.initialize()
            .then(async () => {
                validateEnv();

                const app: express.Application = express();
                const router = new Routers();
                app.use(express.urlencoded({ extended: false }));
                app.use(json());
                app.use(cors());
                app.use(logger('dev'));

                // Cookie Parser
                app.use(router.routes);
            })
            .catch((error => console.log(error)));

        return app;
    }
}
