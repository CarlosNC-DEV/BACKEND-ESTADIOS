import Estadios from "../models/Estadios.js";

export const verEstadios = async (req, res) => {
  try {
    const estadios = await Estadios.find().lean();
    if (estadios.length === 0) {
      return res.status(400).json("No exixten estadios registrados");
    }
    res.status(200).json(estadios);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const crearEstadios = async (req, res) => {
  try {
    const { nombre, pais, ciudad } = req.body;
    if (!nombre || !pais || !ciudad) {
      return res.status(400).json("Todos los campos son requeridos");
    }
    const estadiosModel = new Estadios(req.body);
    const estadiosSave = await estadiosModel.save();
    res.status(200).json(estadiosSave);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const actualizarEstadios = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, pais, ciudad } = req.body;

    if (!nombre || !pais || !ciudad) {
      return res.status(400).json("Todos los campos son requeridos");
    }
    
    const estadiosActualizado = await Estadios.findByIdAndUpdate(id, req.body);
    res.status(200).json(estadiosActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
