import { Router } from 'express';
import { verEstadios, crearEstadios, actualizarEstadios } from '../controllers/estadios.controllers.js';

const router = Router();

router.get("/estadios", verEstadios);
router.post("/estadios", crearEstadios);
router.put("/estadios/:id", actualizarEstadios);

export default router;