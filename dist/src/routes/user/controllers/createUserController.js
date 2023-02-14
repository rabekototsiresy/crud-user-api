"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const cryptoPassword_1 = require("../../../common/helpers/cryptoPassword");
const UserModel_1 = require("../../../common/models/UserModel");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, username, password } = req.body;
        const user = new UserModel_1.UserModel({
            firstName,
            lastName,
            username,
            password: (0, cryptoPassword_1.cryptPassword)(password) // crypt password
        });
        const userCreatd = yield user.save();
        return res.status(201).json({
            message: 'user created successfully',
            code: 201,
            success: true,
            data: userCreatd
        });
    }
    catch (error) {
        console.log(error, 'error');
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        });
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUserController.js.map