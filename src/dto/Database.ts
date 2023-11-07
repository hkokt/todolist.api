import mysql from 'mysql2/promise';
import "dotenv/config";

async function query(command: string) {
    const connection = await mysql.createConnection(process.env.MYSQL_STRING_CONN);
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
