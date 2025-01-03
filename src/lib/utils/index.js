import { readFileSync } from "fs";

export const fetchBlogMetas = () => {
  const data = readFileSync("./blogs/blog.json",'utf-8');
  return JSON.parse(data);
};