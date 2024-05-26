import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UserDao } from "../dao/userDao";
import { IUserDetails } from "../interfaces/user";

declare global {
    namespace Express {
        interface Request {
            user?: IUserDetails;
        }
    }
}

export async function protectRoute(req: Request, res: Response, next: NextFunction) {
    try {
        let token = "";
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false, 
                message: "Token not found"
            });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as {
            _id: string,
            email: string
        };
        if (!decodedToken) {
            return res.status(401).json({
                success: false, 
                message: "Invalid token"
            });
        }

        const user: IUserDetails | null = await UserDao.getUserById(decodedToken._id);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }

        req.user = user;
        next();
    } catch (error: any) {
        return res.status(500).json({
            success: false, 
            message: error.message
        })
    }
}