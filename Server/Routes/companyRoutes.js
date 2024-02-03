import express from 'express';
import {rateLimit} from 'express-rate-limit';

import { getCompanies, getCompanyById, getCompanyJobListing, getCompanyProfile, register, signIn, updateCompanyProfile } from '../Controllers/companiesController.js';
import userAuth from '../Middlewares/authMiddleware.js'
const router = express.Router()

const limit = rateLimit({
    windowMs : 15 * 60 * 1000, //15 minutes
    max:100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers    
})

// REGISTER
router.post("/register",limit,register);

//LOGIN
router.post("/login",limit,signIn);

// GET DATA
router.post("/get-company-profile",userAuth,getCompanyProfile);
router.post("/get-company-joblisting",userAuth,getCompanyJobListing);
router.get("/",getCompanies);
router.get("/get-company/:id",userAuth, getCompanyById)

// UPDATE DATA
router.put("/update-company",userAuth, updateCompanyProfile)

export default router;