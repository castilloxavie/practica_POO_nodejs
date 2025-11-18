import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()


class Database{
    constructor () {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            waitForConnections: true,
            connectionLimit:10,
            queueLimit: 0
        })
    }

    async query(sql, params) {
        return this.pool.query(sql, params)
    }
}

export const db = new Database()
