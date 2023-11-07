import { Router } from "express";
import { contrl } from "../controller/Controller";

const router: Router = Router();

router.get('/test', contrl.test);

export default router;