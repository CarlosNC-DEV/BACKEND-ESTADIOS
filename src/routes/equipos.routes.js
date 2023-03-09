import { Router } from 'express';
import { verEquipos, crearEquipos, actualizarEquipos } from '../controllers/equipos.controllers.js';

const router = Router();

router.get("/equipos", verEquipos);
router.post("/equipos", crearEquipos);
router.put("/equipos/:id", actualizarEquipos);

export default router;