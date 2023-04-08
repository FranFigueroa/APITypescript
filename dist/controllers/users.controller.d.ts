import { Request, Response } from 'express';
declare class UsersController {
    getUsers: (req: Request, res: Response) => Promise<void>;
    getUserById: (req: Request, res: Response) => Promise<void>;
}
export default UsersController;
