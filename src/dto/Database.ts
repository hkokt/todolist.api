import mysql, { Pool, ConnectionOptions, RowDataPacket } from 'mysql2/promise';
import "dotenv/config";

const config: ConnectionOptions = {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: 'root',
    password: '2345678'
}

const pool: Pool = mysql.createPool(config);

async function query(command: string, params?: any): Promise<RowDataPacket[] | Error> {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = params ? await connection.query(command, params) : await connection.query(command);
        return rows as RowDataPacket[];
        //'SELECT * FROM sua_tabela WHERE coluna = :valor', { valor: 'algum_valor' }
    } catch (error) {
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
}

export default {
    query: query
}
