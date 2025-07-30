
import express from 'express'

import {login, register, deleteuser, forgotpassword, getallusers, updateuser } from '../controller/usercontroller.js';


const router=express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/getusers',getallusers);
router.put('/updateuser/:id',updateuser)
router.patch('/forgotpassword/:id',forgotpassword);
router.delete('/deleteuser/:id',deleteuser)


export default router;