import { Schema, model } from 'mongoose';
const ObjectId = Schema.ObjectId;

const historialSchema = new Schema(
    {
        idEstadio:{
            type: ObjectId
        },
        estadio: {
            type: String
        },
        idEquipo1:{
            type: ObjectId
        },
        equipo1: {
            type: String
        },
        idEquipo2:{
            type: ObjectId
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
        timestamps: true,
        versionKey: false
    }
);

export default model("Historial", historialSchema);