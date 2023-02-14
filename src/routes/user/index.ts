


import { Router } from 'express';
import { createUser } from './controllers/createUserController';
import { RegisterSchemaJoi } from '../../common/schemasJoi/RegisterSchemaJoi';
import { validateFormMid } from '../../common/middlewares/validateFormMiddleware';
import { updateUserById } from './controllers/updateUserByIdController';
import { getAllUser } from './controllers/getAllUserController';
import { getUserById } from './controllers/getUserByIdController';
import { deleteUserById } from './controllers/deleteUserByIdController';
export const router: Router = Router();

 
/**
 * get all users
 */
router.route('/').get(getAllUser);

/**
 * get one specific user by id
 */
router.route('/:id').get(getUserById);

/**
 * create user
 */
router.route('/').post(validateFormMid(RegisterSchemaJoi),createUser);

/**
 * create user
 */
router.route('/:id').put(validateFormMid(RegisterSchemaJoi),updateUserById);

/**
 * remove user by id
 */
router.route('/:id').delete(deleteUserById);



