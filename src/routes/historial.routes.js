import { Router } from 'express';
import { verHistorial, crearHistorial, filtraEstadio, eliminarHistorial } from '../controllers/historial.controllers.js';

const router = Router();

router.get("/", verHistorial);
router.post("/", crearHistorial);
router.get("/:id", filtraEstadio);
router.delete("/:id", eliminarHistorial);

export default router;