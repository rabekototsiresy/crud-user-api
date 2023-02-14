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
exports.getAllUser = void 0;
const UserModel_1 = require("../../../common/models/UserModel");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserModel_1.UserModel.find();
        return res.status(201).json({
            message: 'list all user',
            code: 201,
            success: true,
            data: users
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        });
    }
});
exports.getAllUser = getAllUser;
//# sourceMappingURL=getAllUserController.js.map