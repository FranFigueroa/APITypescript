import { Request, Response } from 'express';
declare class Controller {
    getIndex: (req: Request, res: Response) => Promise<void>;
    getApi: (req: Request, res: Response) => Promise<void>;
    getApibyId: (req: Request, res: Response) => Promise<void>;
}
export default Controller;
