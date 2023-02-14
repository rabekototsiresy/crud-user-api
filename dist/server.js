"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./src/routes/router");
const db_1 = require("./src/common/services/db");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 9090;
/**
 * database connection
 */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: '*' }));
/**
 * database connection
 */
(0, db_1.dbConnection)();
/**
 * match all routes
 */
app.use('/api/v1', router_1.router);
/**
 * starting server
 */
app.listen(port, () => {
    console.log('server running ' + port);
});
/**
 * for query not match return 404 not found
 */
app.all('/**', (req, res) => {
    return res.status(404).send('page not found');
});
//# sourceMappingURL=server.js.map