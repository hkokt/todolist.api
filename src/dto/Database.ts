import mysql, { ConnectionOptions } from 'mysql2/promise';
import "dotenv/config";

const config: ConnectionOptions = {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
}

async function query(command: string) {
    const connection = await mysql.createConnection(config);
    try {
        const [rows] = await connection.query(command);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        await connection.end();
    }
}

export default {
    query: query
}
