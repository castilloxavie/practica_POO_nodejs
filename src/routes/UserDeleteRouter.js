import express from "express";
import { UserDeleteControlller } from "../controllers/UserDeletController.js";

const router = express.Router()

router.delete("/:id", UserDeleteControlller.deleUser)

export default router
