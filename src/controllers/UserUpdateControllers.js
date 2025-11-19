import { UserUpdateServices } from "../services/UserUpdateServices.js";

export class UserUpdateController{
    static async updateUser(req, res){
        try {
            const id = req.params.id
            const data = req.body

            if(!id){
                return res.status(400).json({
                    message: "Id del usuario es requerido"
                })
            }

            const allowed = ["nombre", "email", "password"]
            const fieldsToUpdate = {}
            for (const key of allowed) {
                if (data[key] !== undefined) fieldsToUpdate[key] = data[key]
            }

            if (Object.keys(fieldsToUpdate).length === 0) {
                return res.status(400).json({
                    message: "No hay campos válidos para actualizar"
                })
            }

            const result = await UserUpdateServices.updateUser(id, fieldsToUpdate)

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Usuario no encontrado"
                })
            }

            return res.json({
                message: "Usuario actualizado correctamente",
                id: id,
                updated: fieldsToUpdate
            })

        } catch (error) {
            console.error("Error al actualizar el usuario", error);
            return res.status(500).json({
                message: "Error en el servidor al actualizar el usuario"
            })
        }
    }
}