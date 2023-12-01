import Database from "../dto/Database";
import { Request, Response } from "express";

class Tarefas {

    public async status(req: Request, res: Response) {
        let rs = undefined;
        try {
            rs = await Database.query(`select 1+1 as teste;`);
            if (rs !== undefined) {
                res.send({
                    banco: 'ok',
                    server: 'ok'
                });
            }
        } catch (err) {
            if (rs === undefined) {
                res.status(400).json({
                    server: "ok ",
                    banco: err
                });
            }
        }
    }

    public async get(req: Request, res: Response) {
        const titulo = req.query.titulo ? req.query.titulo : undefined;
        const userId = req.body.userId;
        try {
            let rs;
            if (titulo === undefined) {
                rs = await Database.query(`call searchByUser(?);`, [1]);
            } else {
                rs = await Database.query(`call searchByTitle(?);`, [titulo]);
            }
            if (rs.length === 0) {
                res.send("sem resultados");
            } else {
                res.send(rs);
            }
        } catch (err) {
            res.send(err)
        }

    }

    public async post(req: Request, res: Response) {
        try {
            const rs = await Database.query(`select 1+1 as teste`)
            res.status(200).json(rs);
        } catch (err) {
            res.status(400).json({ err: "falha na inserção" });
        }
    }

    public async put(req: Request, res: Response) {
        try {
            const rs = await Database.query(`select 1+1 as teste`)
            res.status(200).json(rs);
        } catch (err) {
            res.status(400).json({ err: "falha na inserção" });
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const rs = await Database.query(`select 1+1 as teste`)
            res.status(200).json(rs);
        } catch (err) {
            res.status(400).json({ err: "falha na inserção" });
        }
    }

}

export const tarefas = new Tarefas();