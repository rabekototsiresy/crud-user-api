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
exports.updateUserById = void 0;
const UserModel_1 = require("../../../common/models/UserModel");
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { firstName, lastName, username } = req.body;
        const user = yield UserModel_1.UserModel.findById(id);
        if (user) {
            Object.assign(user, req.body);
            yield user.save();
            return res.status(201).json({
                message: 'user updated successfully',
                code: 201,
                success: true,
                data: user
            });
        }
        else {
            return res.status(404).json({
                message: `user not found: ${id}`,
                code: 404,
                success: false
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: 'server error occurred',
            code: 500,
            success: false,
        });
    }
});
exports.updateUserById = updateUserById;
//# sourceMappingURL=updateUserByIdController.js.map