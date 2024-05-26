import { UserDao } from "../dao/userDao";
import { IUserDetails } from "../interfaces/user";
import jwt from "jsonwebtoken";


// business logic for user
export class UserService {
    static async registerUser(userDetails: IUserDetails): Promise<string> {

        // check if user already exists
        const user = await UserDao.getUserByEmail(userDetails.email);
        if (user) {
            throw new Error(`User with ${userDetails.email} already exists`);
        }

        // create user 
        const newUser = await UserDao.createUser(userDetails);
        if (newUser) {
            return "Account created succssfully";
        } else {
            throw new Error('Some error occured');
        }
    }

    private static generateToken(userDetails: IUserDetails) {
        const token = jwt.sign({
            _id: userDetails._id,
            email: userDetails.email
        }, process.env.JWT_SECRET as string, {expiresIn: '1h'});
        
        return token;
    }

    static async loginUser(email: string, password: string): Promise<string> {
        const user: IUserDetails | null = await UserDao.getUserByEmail(email);
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
    }

    static async getUserByEmail(email: string): Promise<IUserDetails | null> {
        return UserDao.getUserByEmail(email);
    }
}