import { fetchBlogMetas } from '$lib/utils/index.js';
import { NodeCompiler } from '@myriaddreamin/typst-ts-node-compiler';
import { json } from '@sveltejs/kit';
export const GET = async({params}) => {
    const name = params.slug;
    const datas = fetchBlogMetas();
    const data = datas.filter((obj) => obj.name == name);
    if(data.length == 0){
        throw Error("Blog doesn't exist.");
    }
    const blogMeta = data[0];
    const compiler = NodeCompiler.create();
    const docs = await compiler.svg({
        mainFilePath : blogMeta.file
    });
    return json({
        content : docs,
        meta : blogMeta
    })
}