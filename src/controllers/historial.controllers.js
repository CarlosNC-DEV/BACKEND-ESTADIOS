import Historial from "../models/Historial.js";
import Estadios from "../models/Estadios.js";
import Equipos from "../models/Equipos.js";

export const verHistorial = async (req, res) => {
  try {
    const historial = await Historial.find().lean();
    if (historial.length === 0) {
      return res.status(400).json("No existen juegos");
    }
    res.status(200).json(historial);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const crearHistorial = async (req, res) => {
  try {
    const { idEstadio, idEquipo1, idEquipo2 } = req.body;

    const estadio = await Estadios.findById(idEstadio);
    const equipo1 = await Equipos.findById(idEquipo1);
    const equipo2 = await Equipos.findById(idEquipo2);

    const historialModel = new Historial(req.body);
    historialModel.estadio = estadio.nombre;
    historialModel.equipo1 = equipo1.nombre;
    historialModel.equipo2 = equipo2.nombre;

    const historialSave = await historialModel.save();

    res.status(200).json(historialSave);

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
