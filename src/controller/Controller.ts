import Database from "../dto/Database";
import { Request, Response } from "express";

class Controller {

    public async test(req: Request, res: Response) {
        try {
            const rs = await Database.query(`select 1+1 as teste`)
            res.status(200).json(rs);
        } catch (err) {
            res.status(400).json({ err: "falha na inserção" });
        }
    }

}

export const contrl = new Controller();