import { Router } from "express";
import { contrl } from "../controller/Controller";

const router: Router = Router();

router.get('/insert', contrl.insert);

export default router;