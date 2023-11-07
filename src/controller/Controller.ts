import Database from "../dto/Database";
import { Request, Response } from "express";

class Controller {

    public async insert(req: Request, res: Response) {
        try {
            const rs = await Database.query(`insert into teste values(2, 'insert por api')`)
            res.status(200).json(rs);
        } catch (err) {
            res.status(400).json({ err: "falha na inserção" });
        }
    }

}

export const contrl = new Controller();