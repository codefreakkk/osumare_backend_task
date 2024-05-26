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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userDao_1 = require("../dao/userDao");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// business logic for user
class UserService {
    static registerUser(userDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            // check if user already exists
            const user = yield userDao_1.UserDao.getUserByEmail(userDetails.email);
            if (user) {
                throw new Error(`User with ${userDetails.email} already exists`);
            }
            // create user 
            const newUser = yield userDao_1.UserDao.createUser(userDetails);
            if (newUser) {
                return "Account created succssfully";
            }
            else {
                throw new Error('Some error occured');
            }
        });
    }
    static generateToken(userDetails) {
        const token = jsonwebtoken_1.default.sign({
            _id: userDetails._id,
            email: userDetails.email
        }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    static loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userDao_1.UserDao.getUserByEmail(email);
            if (!user) {
                throw new Error(`User not found with ${email}`);
            }
            // check password
            if (password != user.password) {
                throw new Error(`Password not match`);
            }
            // generate token
            const token = this.generateToken(user);
            return token;
        });
    }
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return userDao_1.UserDao.getUserByEmail(email);
        });
    }
}
exports.UserService = UserService;
