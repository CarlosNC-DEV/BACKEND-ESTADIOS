import Historial from "../models/Historial.js";

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
    const { estadio, equipo1, equipo2, marcador } = req.body;
    if (!estadio || !equipo1 || !equipo2 || !marcador) {
      return res.status(400).json("Todos los campos son requeridos");
    }
    const historialModel = new Historial(req.body);
    const usuariosSave = await historialModel.save();
    res.status(200).json(usuariosSave);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
