import {db} from "../config/connectionDatabases.js"

export class UserTable{
    static async create() {
        try {
            await db.query(
                `
                CREATE TABLE IF NOT EXISTS user(
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(255),
                email VARCHAR(255),
                password VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )
                `
            )
            console.log("Tabla user creada con exito")
        } catch (error) {
            console.error("Error al crear la tabla users", error);
            
        }
    }
}