import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import UserRouter from "./routes/UserRoutes.js"
import { UserTable } from "./migrations/tables.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/users", UserRouter)

const PORT = process.env.SERVER_CREAR || 4001

app.listen(PORT, async() => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    await UserTable.create()
} )
