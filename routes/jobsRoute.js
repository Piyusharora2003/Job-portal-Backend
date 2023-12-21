import express from "express";
import {
  createJob,
  deleteJobController,
  getAllJobsController,
  getMyJobsController,
  updateJobController,
} from "../controllers/jobsController.js";
import userAuth from "../middelwares/authMiddleware.js";

const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/newJob", userAuth, createJob);

//GET JOBS from all users 
router.get("/getJob", userAuth, getAllJobsController);

// GET JOBS from current user
router.get("/myJob", userAuth, getMyJobsController);

//UPDATE JOBS ||  PATCH
router.patch("/updateJob/:id", userAuth, updateJobController);

//DELETE JOBS || DELETE
router.delete("/deleteJob/:id", userAuth, deleteJobController);

export default router;
