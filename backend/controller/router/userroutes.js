
import express from 'express'

const router=express.Router();
import { login,register } from '../usercontroller.js';
router.post('/register', register);
router.post('/login', login);


export default router;