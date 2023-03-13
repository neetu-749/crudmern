import express from 'express';
import { addUser, deleteUser, getUsers } from '../controller/user-controller.js';

const router=express.Router();

// to save user into database
router.post('/adduser', addUser);

router.get('/allusers', getUsers);
router.delete('/:id', deleteUser);

export default router;