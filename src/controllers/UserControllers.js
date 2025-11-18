import { UserServices } from "../services/Userservices.js";

export class UserController {
    static async create(req, res){
        try {
            const data = req.body

            const result = await UserServices.createUsers(data)

            console.log(result);
            return res.json("Usuario creado correctamente", result)
            
            
        } catch (error) {
            console.error("Error en UsuarioControlllers", error);
            return res.status(500).json({error: "Error en el servidor o al crear Usuario "})
        }
    }
}