import { Schema, model, models } from "mongoose";

const MaterialGroupSchema = new Schema({
    name: {
        type: String,
        unique: [true, "Material Group is already exists!"],
        required: [true, "Material Group is required!"],
    },
    description: {
        type: String,
        required: [true, "Material Group description is required!"],
    }
});

const MaterialGroup = models.MaterialGroup || model("MaterialGroup", MaterialGroupSchema, "materialGroups");

export default MaterialGroup;