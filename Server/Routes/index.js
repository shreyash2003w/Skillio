import express from 'express'

import authRoutes from './authRoutes.js'
import userRoutes from "./userRoutes.js"
import companyRoutes from  "./companyRoutes.js"
import jobRoutes from "./jobRoutes.js"
const router = express.Router();

const path = "/api-v1/";


router.use(`${path}auth`,authRoutes); //api-v1/auth
router.use(`${path}user`,userRoutes); 
router.use(`${path}company`,companyRoutes);
router.use(`${path}job`,jobRoutes)

export default router;