import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router: Router = Router();
const API_VERSION = '/v1';

router.post(`${API_VERSION}/register`, UserController.registerUser);
router.post(`${API_VERSION}/login`, UserController.login);
router.get(`${API_VERSION}/user/:email`, UserController.getUserByEmail);

export default router;
