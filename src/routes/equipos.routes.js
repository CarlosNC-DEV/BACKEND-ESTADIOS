import { Router } from 'express';
import { verEquipos, crearEquipos } from '../controllers/equipos.controllers.js';

const router = Router();

router.get("/equipos", verEquipos);
router.post("/equipos", crearEquipos);

export default router;