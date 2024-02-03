import express from "express"
import userAuth from "../Middlewares/authMiddleware.js";
import { getUser, getUserById, updateUser } from "../Controllers/userController.js";

const router = express.Router();

// GET user
router.get("/get-user/:id",userAuth,getUserById);


router.post('/get-user',userAuth,getUser)

// UODATE User || PUT
router.put("/update-user",userAuth,updateUser)

export default router;