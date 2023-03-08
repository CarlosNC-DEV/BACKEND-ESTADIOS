import { Schema, model } from 'mongoose';

const equiposSchema = new Schema(
    {
        nombre:{
            type: String
        },
        director:{
            type: String
        },
        pais:{
            type: String
        },
        ciudad: {
            type: String
        }
    },
    {
        versionKey: false
    }
)

export default model("Equipos", equiposSchema);