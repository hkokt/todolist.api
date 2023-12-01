import { Router } from "express";
import { tarefas } from "../controller/Tarefas";

const router: Router = Router();

const endpoints = {
    Tarefa: "/tarefas"
}

router.get(endpoints.Tarefa + '/status', tarefas.status);

router.get(endpoints.Tarefa, tarefas.get);

router.post(endpoints.Tarefa, tarefas.post);

router.put(endpoints.Tarefa, tarefas.put);

router.delete(endpoints.Tarefa, tarefas.delete);

export default router;