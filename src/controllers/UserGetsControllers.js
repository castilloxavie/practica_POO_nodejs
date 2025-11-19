import { UserGetServices } from "../services/UserGetsServices.js";

export class UserGetController {
    static async getAll(req, res){
        try {
            const users = await UserGetServices.getUserAll()
            return res.json(users)
        } catch (error) {
            console.error("error Obteniendo el Usuario", error);
            return res.status(500).json({
                error: "Error en el server o interno"
            })
            
        }
    }


    static async getUserId(req, res) {
        try {
            const id = req.params.id
            const user = await UserGetServices.getUserById(id)

            if(!user){
                return res.status(404).json({
                    message: "Usuario no encontrado"
                })
            }

            return res.json(user)
        } catch (error) {
            console.error("Error al obtener el usario", error);
            return res.status(500).json({
                message: "Error del server o interno"
            })
            
        }
    }
}