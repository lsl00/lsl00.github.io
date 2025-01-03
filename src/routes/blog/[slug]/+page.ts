export const load = async ({fetch,params}) => {
    const resp = await fetch("/api/blog/"+params.slug);
    const data = await resp.json();
    return data
}