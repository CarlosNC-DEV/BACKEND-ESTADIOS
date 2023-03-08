import Equipos from "../models/Equipos.js";

export const verEquipos = async (req, res) => {
  try {
    const equipos = await Equipos.find().lean();
    if (equipos.length === 0) {
      return res.status(400).json("No existe un equipo");
    }
    res.status(200).json(equipos);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const crearEquipos = async (req, res) => {
  try {
    const { nombre, director, pais, ciudad } = req.body;
    if (!nombre || !director || !pais || !ciudad) {
      return res.status(400).json("Todos los campos son requeridos");
    }
    const equiposModel = new Equipos(req.body);
    const equipoSave = await equiposModel.save();
    res.status(200).json(equipoSave);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
