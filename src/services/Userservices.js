import { db } from "../config/connectionDatabases.js";
import { User } from "../models/UserModel.js";

export class UserServices {
    static async createUsers(data){
        const user = new User(data)

        //hacer la insercion a la base de datos
        await db.query(
            "INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)",
            [user.nombre, user.email, user.password]
        )

        return {message: `Ususario creado correctamente ${user}`}
    }
}