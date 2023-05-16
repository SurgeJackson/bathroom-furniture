import MaterialGroup from  "../../../models/materialGroup";
import { connectToDB } from "../../../utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();

        const materialGroups = await MaterialGroup.find({});

        return new Response(JSON.stringify(materialGroups), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch all Material Groups", { status: 500 });
    }
} 