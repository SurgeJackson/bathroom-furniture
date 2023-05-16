import { Schema, model, models } from "mongoose";

const MaterialSchema = new Schema({
    materialGroup: {
        type: Schema.Types.ObjectId,
        ref: 'MaterialGroup',
    },
    name: {
        type: String,
        unique: [true, "Material is already exists!"],
        required: [true, "Material Name is required!"],
    },
    image: {
        type: String,
    }
});

const Material = models.Material || model("Material", MaterialSchema, "materials");

export default Material;