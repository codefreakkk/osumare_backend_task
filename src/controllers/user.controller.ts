import { Request, Response } from "express";
import { IUserDetails } from "../interfaces/user";
import { UserService } from "../services/user.service";

export class UserController {

    static async registerUser(req: Request, res: Response): Promise<void> {
        try {
            const {name, email, password, address} = req.body;

            const userDetails: IUserDetails = {
                name,
                email, 
                password,
                address
            }

            const user = await UserService.registerUser(userDetails);
            res.status(201).json({
                success: true, 
                data: user
            })

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            })
        }
    }

    static async login(req: Request, res: Response): Promise<void> {
        try {
            const {email, password} = req.body;

            try {
                const token = await UserService.loginUser(email, password);
                res.status(200).json({
                    success: true, 
                    token: token
                });
            } catch (error: any) {
                res.status(401).json({
                    success: false,
                    message: error.message
                })
            }

        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }

    static async getUserByEmail(req: Request, res: Response): Promise<void> {
        try {
            const email = req.params.email;
            const user = await UserService.getUserByEmail(email);

            res.status(200).json({
                success: true,
                user: user
            })

        } catch (error: any) {
            res.status(500).json({
                success: false, 
                message: error.message
            })
        }
    }
}