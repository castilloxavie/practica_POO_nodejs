import express from "express"
import { UserGetController } from "../controllers/UserGetsControllers.js"

const router = express.Router()

router.get("/all", UserGetController.getAll)
router.get("/:id", UserGetController.getUserId)

export default router
