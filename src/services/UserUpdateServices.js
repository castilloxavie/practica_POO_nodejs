import { db } from "../config/connectionDatabases.js";


export class UserUpdateServices {
    static async updateUser(id, data) {
        const [result] = await db.query(
            "UPDATE users SET ? WHERE id = ?",
            [data, id]
        )
        return result
    }
}