import { fetchBlogMetas } from "$lib/utils"
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const data = fetchBlogMetas();
    return json(data);
}