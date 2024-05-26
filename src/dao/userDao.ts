import { IUserDetails } from "../interfaces/user";
import User from "../model/user";

export class UserDao {
    static async getUserByEmail(email: string): Promise<IUserDetails | null> {
        const user = User.findOne({email}).exec();
        return user;
    }

    static async getUserById(id: string): Promise<IUserDetails | null> {
        const user = User.findById({_id: id});
        return user;
    }
    
    static async createUser(userDetails: IUserDetails): Promise<IUserDetails> {
        const newUser = new User(userDetails);
        return newUser.save();
    }
}