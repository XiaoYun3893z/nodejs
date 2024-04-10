import http from "http";
// import {readFileSync, readFile} from "fs";
import { readFile } from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

// 跟講義的 12 內容不同
const server = http.createServer(async (request, response) => {
  const {url} = request;
  let {pathname} =  new URL(url, "http://localhost");
  if(pathname === "/"){
    pathname = "/index.html"
  }

  let root = resolve(__dirname, "pages");
  // root = resolve(__dirname, "public");
  
  let filePath = resolve(root,  pathname.slice(1));
  const data = await readFile(filePath)
  .then(result => result)
  .catch(error => undefined);
  if(!data){
    response.statusCode = 500;
    response.setHeader("content-type", "text/html;charset=utf-8");
    response.end("<h1>500 - 文件讀取失敗</h1>");
    return false;
  }
  response.end(data);
});

server.listen(9000, () => {
  console.log("server is running at http://localhost:9000");
})