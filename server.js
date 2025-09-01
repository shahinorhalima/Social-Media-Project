import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import colors from "colors";
import userRouter from "./router/userRouter.js"
import followRouter from "./router/followRouter.js"

// load enviroment variables

dotenv.config();

const PORT = process.env.PORT || 6060;

const app = express();

//  support 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// router
app.use("/api/v1/user", userRouter)
app.use("/api/v1/follow", followRouter)
// listen server

app.listen(PORT, () =>{

    console.log(`server is running on port ${PORT}`);
})