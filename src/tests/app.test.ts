import { Response } from "express";
import { AppDataSource } from "../utils/data-source";

const request = require('supertest');
const app = require('../config/app');


describe('Test the root path', () => { 
    beforeEach(async () => {
        await AppDataSource.initialize();
    })

    afterEach(async () => {
       await AppDataSource.destroy();
    })

    test('it should response the GET method', () => {
        return request(app)
            .get('/api/user/')
            .then((response: Response) => {
                expect(response.statusCode).toBe(200);
            });
    })
 })