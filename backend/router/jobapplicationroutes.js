import express, { application } from 'express'

const router=express.Router();
import {applyjob, getapplicationofparticularjob ,getapplicationsoflogineduser,updateapplication,deleteapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:jobid', getapplicationofparticularjob);
router.get('/applications/:userid', getapplicationsoflogineduser);
router.put('/apply/:id', updateapplication)
router.delete('/apply/:id',deleteapplication)

export default router