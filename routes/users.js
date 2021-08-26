import express from 'express';

import {getUsers, createUser,getUser, deleteUser, updateUser  } from '../controllers/users.js'
const router = express.Router();



/* path starts at /users */
router.get('/', getUsers) /* gets all users */

router.post('/', createUser) /* create user */

router.get('/:id', getUser)/* get user with id */

router.delete('/:id', deleteUser)/* delete user with id */

router.patch('/:id', updateUser)/* update user with id */

export default router;