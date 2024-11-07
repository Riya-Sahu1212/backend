import express from "express";
//import { register} from "../controllers/userController.js";

import {getAllJobs,getmyJobs,
    
    postJob,
    updateJob,deleteJob,
    getSingleJob} from "../controllers/jobController.js";
import {isAuthenticated} from "../middlewares/auth.js";
const router = express.Router();

//router.post("/register", register);
router.get("/getall",getAllJobs);
router.post("/post",isAuthenticated,postJob);
router.get("/getmyjobs", isAuthenticated, getmyJobs);
router.put("/update/:id", isAuthenticated, updateJob);
router.delete("/delete/:id", isAuthenticated, deleteJob);
router.get("/:id", isAuthenticated, getSingleJob);
export default router;

