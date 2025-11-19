import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import UserDeleteRouter from "./routes/UserDeleteRouter.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/users", UserDeleteRouter)

const PORT =process.env.SERVER_ELIMINAR || 4004

app.listen(PORT, async() => {
    console.log(`Server eliminar corriendo en el puerto ${PORT}`)
})
