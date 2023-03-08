import { Router } from 'express';
import { verEstadios, crearEstadios } from '../controllers/estadios.controllers.js';

const router = Router();

router.get("/estadios", verEstadios);
router.post("/estadios", crearEstadios);

export default router;