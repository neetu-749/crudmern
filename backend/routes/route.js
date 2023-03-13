import express from 'express';
import { addUser, deleteUser, getUser, getUsers, editUser } from '../controller/user-controller.js';

const router=express.Router();

// to save user into database
router.post('/adduser', addUser);
router.get('/allusers', getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;