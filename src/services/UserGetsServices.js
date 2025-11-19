import { db } from "../config/connectionDatabases.js";
import { User } from "../models/UserModel.js"

export class UserGetServices {
    static async getUserAll() {
        const [rows] = await db.query("SELECT * FROM users")
        return rows.map(rows => new User(rows))
    }

    static async getUserById(id){
        const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id])
        if(rows.length === 0) return null;
        return new User(rows[0])
    }
}
