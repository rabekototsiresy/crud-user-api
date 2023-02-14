"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const SchemaUser = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    _id: {
        type: String
    }
});
exports.UserModel = (0, mongoose_1.model)('User', SchemaUser);
//# sourceMappingURL=UserModel.js.map