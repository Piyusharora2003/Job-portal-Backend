import express from "express";
import { getMyInfo, updateUserController } from "../controllers/userController.js";
import userAuth from "../middelwares/authMiddleware.js"; // user is authenticated and logged in

//router object
const router = express.Router();

//routes

// GET USER details 
router.get('/myInfo',userAuth,getMyInfo);

// UPDATE USER || PUT
router.put("/updateUser", userAuth, updateUserController);

export default router;