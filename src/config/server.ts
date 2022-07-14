import App from './app';
import Database from './db';
import { Application } from 'express';

export default class Server {
    static async setup(): Promise<Application> {
        await Database.getConnection();
        return App.app();
    }
}
