import {db} from "../config/connectionDatabases.js"

export class UserDeleteUser {
    static async deleteUser(id, data) {
        const [result] = await db.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        )
        if(result.affectedRows === 0){
            return false
        }
        return result
    }
}

