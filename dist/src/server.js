"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URI = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const todos_route_1 = __importDefault(require("./routes/todos.route"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: './src/config/.env' });
exports.app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
exports.API_URI = '/api';
// connect db
(0, db_1.connectDB)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
// routes
exports.app.use(`${exports.API_URI}`, user_route_1.default);
exports.app.use(`${exports.API_URI}`, todos_route_1.default);
// server
const server = exports.app.listen(PORT, () => {
    console.log(`SERVER started on ${PORT}`);
});
