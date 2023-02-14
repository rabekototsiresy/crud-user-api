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
exports.getUserById = void 0;
const UserModel_1 = require("../../../common/models/UserModel");
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id) {
            const user = yield UserModel_1.UserModel.findById(id);
            if (user) {
                return res.status(200).json({
                    message: `user id : ${id}`,
                    code: 200,
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
        else {
            return res.status(404).json({
                message: `id not defined`,
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
exports.getUserById = getUserById;
//# sourceMappingURL=getUserByIdController.js.map