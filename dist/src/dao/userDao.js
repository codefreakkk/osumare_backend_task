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
exports.UserDao = void 0;
const user_1 = __importDefault(require("../model/user"));
class UserDao {
    static getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = user_1.default.findOne({ email }).exec();
            return user;
        });
    }
    static getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = user_1.default.findById({ _id: id });
            return user;
        });
    }
    static createUser(userDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_1.default(userDetails);
            return newUser.save();
        });
    }
}
exports.UserDao = UserDao;
