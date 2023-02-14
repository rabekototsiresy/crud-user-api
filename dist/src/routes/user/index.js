"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createUserController_1 = require("./controllers/createUserController");
const RegisterSchemaJoi_1 = require("../../common/schemasJoi/RegisterSchemaJoi");
const validateFormMiddleware_1 = require("../../common/middlewares/validateFormMiddleware");
const updateUserByIdController_1 = require("./controllers/updateUserByIdController");
const getAllUserController_1 = require("./controllers/getAllUserController");
const getUserByIdController_1 = require("./controllers/getUserByIdController");
const deleteUserByIdController_1 = require("./controllers/deleteUserByIdController");
exports.router = (0, express_1.Router)();
/**
 * get all users
 */
exports.router.route('/').get(getAllUserController_1.getAllUser);
/**
 * get one specific user by id
 */
exports.router.route('/:id').get(getUserByIdController_1.getUserById);
/**
 * create user
 */
exports.router.route('/').post((0, validateFormMiddleware_1.validateFormMid)(RegisterSchemaJoi_1.RegisterSchemaJoi), createUserController_1.createUser);
/**
 * create user
 */
exports.router.route('/:id').put((0, validateFormMiddleware_1.validateFormMid)(RegisterSchemaJoi_1.RegisterSchemaJoi), updateUserByIdController_1.updateUserById);
/**
 * remove user by id
 */
exports.router.route('/:id').delete(deleteUserByIdController_1.deleteUserById);
//# sourceMappingURL=index.js.map