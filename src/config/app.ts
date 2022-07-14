import express = require('express');
import { json } from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { AppDataSource } from '../utils/data-source';
import validateEnv from '../utils/validateEnv';
import config from 'config';


export default class App {
    static async app(): Promise<express.Application> {
        const app: express.Application = express();

        AppDataSource.initialize()
            .then(async () => {
                validateEnv();

                const app = express();
                app.use(express.urlencoded({ extended: false }));
                app.use(json());
                app.use(cors());
                app.use(logger('dev'));

                // Cookie Parser
                // Routes
            })
            .catch((error => console.log(error)));

        return app;
    }
}
