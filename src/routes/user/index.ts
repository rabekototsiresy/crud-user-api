


import { Router } from 'express';
import { createUser } from './controllers/createUserController';
import { getUser } from './getUserController';

export const router: Router = Router();


/**
 * get all users
 */
router.route('/').get(getUser);


/**
 * update one fivondronana by id
//  */
// router.route('/:id').put(pass.authenticate('jwt',{session: false}),validateFormMid(FivSchemaJoi),updateFivController);

/**
 * remove one fivondornana by id
 */

/**
 * get one fivondronana by id
 */
router.route('/').get(createUser);