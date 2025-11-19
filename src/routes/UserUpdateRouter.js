import express from "express";
import { UserUpdateController } from "../controllers/UserUpdateControllers.js";

const router = express.Router()

router.put("/:id", UserUpdateController.updateUser)

export default router