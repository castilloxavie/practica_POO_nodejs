import { UserDeleteUser } from "../services/UserDeleteServices.js";

export class UserDeleteControlller {
    static async deleUser(req, res){
        try {
            const id = req.params.id
            const deleted = await UserDeleteUser.deleteUser(id)

            if(!deleted){
                return res.status(404).json({ message: "Usuario no encontrado" })
            }

            return res.json({
                message: "Usuario Eliminado correctamente"
            })
        } catch (error) {
            console.error("Error a eliminar el Usuario", error);
            return res.status(500).json({
                error: "Error del server o Interno"
            })
            
        }
    }
}