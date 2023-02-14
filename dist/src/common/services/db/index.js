"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const config_1 = require("../../../config");
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnection() {
    const uri = `mongodb+srv://${config_1.config.db_user}:${config_1.config.db_pass}@cluster0.n8haibj.mongodb.net/${config_1.config.dbname}?retryWrites=true&w=majority`;
    mongoose_1.default.connect(uri)
        .then(() => {
        console.log('Mongo : Conected ✔️');
    })
        .catch((err) => {
        console.log('Mongo : Not connected ️❌️');
        throw err;
    });
}
exports.dbConnection = dbConnection;
//# sourceMappingURL=index.js.map