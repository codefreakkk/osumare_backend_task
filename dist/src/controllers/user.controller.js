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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    static registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, address } = req.body;
                const userDetails = {
                    name,
                    email,
                    password,
                    address
                };
                const user = yield user_service_1.UserService.registerUser(userDetails);
                res.status(201).json({
                    success: true,
                    data: user
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error
                });
            }
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                try {
                    const token = yield user_service_1.UserService.loginUser(email, password);
                    res.status(200).json({
                        success: true,
                        token: token
                    });
                }
                catch (error) {
                    res.status(401).json({
                        success: false,
                        message: error.message
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
    static getUserByEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.params.email;
                const user = yield user_service_1.UserService.getUserByEmail(email);
                res.status(200).json({
                    success: true,
                    user: user
                });
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: error.message
                });
            }
        });
    }
}
exports.UserController = UserController;
