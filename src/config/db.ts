import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AppDataSource } from '../utils/data-source';

export default class Database {
    private static connection: DataSource | null = null;

    static async getConnection(): Promise<DataSource> {
        if (this.connection === null || !this.connection.isInitialized) {
            this.connection = await AppDataSource.initialize();
        }

        return this.connection;
    }

    static async closeConnection(): Promise<void> {
        const connection = await this.getConnection();
        await connection.destroy();
    }
}
