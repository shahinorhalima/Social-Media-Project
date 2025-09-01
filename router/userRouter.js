
import express from "express";
import { createUser, getAllUser, getSingleUser } from "../controller/routerController.js";


const router = express.Router();


router.post("/", createUser)
router.get("/", getAllUser)
router.get("/:id", getSingleUser)

export default router;