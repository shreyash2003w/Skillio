import  express  from "express";
import userAuth from "../Middlewares/authMiddleware.js"
import { createJob, deleteJobPost, getJobById, getJobPosts, updateJob } from "../Controllers/jobController.js";

const router = express.Router();

// POST JOB
router.post("/upload-job",userAuth,createJob);
//UPDATE JOB
router.put("/update-job/:id",userAuth,updateJob);

// GET JOB POST
router.get("/find-jobs",getJobPosts);
router.get("/get-job-details/:id",getJobById);

// DELETE JOB POST
router.delete("/delete-job/:id",userAuth,deleteJobPost);

export default router;