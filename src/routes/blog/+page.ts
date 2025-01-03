export const load = async({fetch}) => {
    const resp = await fetch('/api/blogs');
    const data = await resp.json();
    return {
        data
    };
}