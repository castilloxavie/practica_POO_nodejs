import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import UserUpdateRouter from "./routes/UserUpdateRouter.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/users", UserUpdateRouter)

const PORT = process.env.SERVER_ACTUALIZAR || 4003

app.listen(PORT, async() => {
    console.log(`Servidor de actualización de usuarios escuchando en el puerto ${PORT}`);
})