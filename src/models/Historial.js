import { Schema, model } from 'mongoose';

const historialSchema = new Schema(
    {
        estadio: {
            type: String
        },
        equipo1: {
            type: String
        },
        equipo2:{
            type: String
        },
        marcador:{
            E1:{
                type:Number
            },
            E2:{
                type:Number
            }
        }
    },
    {
        date: true,
        versionKey: false
    }
);

export default model("Historial", historialSchema);