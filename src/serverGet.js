import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userGetsRouters from "./routes/UserGetsRouters.js"


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use("/users", userGetsRouters)

const PORT = process.env.SERVER_OBTENER || 4002

app.listen(PORT, async() => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);    
})
