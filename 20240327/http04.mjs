import http from "http";
import { parse } from "url";

const server = http.createServer((request, response) => {
  const { url } = request;
  let res = parse(url, true);
  const { pathname, query } = res;
  console.log(pathname);
  console.log(query);
  console.log(query.name);
  console.log(query.pwd);
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end("你好主機");
});

server.listen(9000, () => {
  console.log("server is running http://localhost:9000");
});
