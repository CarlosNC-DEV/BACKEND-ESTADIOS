import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import historial from './routes/historial.routes.js';
import estadios from './routes/estadios.routes.js';
import equipos from './routes/equipos.routes.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(historial);
app.use("/historial", estadios);
app.use("/historial",equipos);

export default app;