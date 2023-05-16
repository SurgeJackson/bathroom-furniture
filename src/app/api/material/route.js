import Material from  "../../../models/material";
import { connectToDB } from "../../../utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const materials = await Material.find({}).populate("materialGroup");

        return new Response(JSON.stringify(materials), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all materials", { status: 500 });
    }
}

export const POST = async (request) => {
    const { materialGroupId, name, image } = await request.json();

    try {
        await connectToDB();
        const newMaterial = new Material({ materialGroup: materialGroupId, name, image });

        await newMaterial.save();
        return new Response(JSON.stringify(newMaterial), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new material", { status: 500 });
    }
}