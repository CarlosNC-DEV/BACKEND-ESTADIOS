import { Schema, model} from 'mongoose';

const estadiosSchema = new Schema(
    {
        nombre: {
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
);

export default model("Estadios", estadiosSchema);