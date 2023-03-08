import { Router } from 'express';
import { verHistorial, crearHistorial } from '../controllers/historial.controllers.js';

const router = Router();

router.get("/", verHistorial);
router.post("/", crearHistorial);

export default router;