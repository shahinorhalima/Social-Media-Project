import express from "express";
import { createFollow, getAllFollow } from "../controller/fllowController.js";


// init router
const router = express.Router();


// create follow

router.post("/", createFollow)
router.get("/", getAllFollow)


// export default router;


export default router;