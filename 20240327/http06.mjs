import http from "http";

const server = http.createServer((request, response) => {
  const { method, url } = request;
  const { pathname } = new URL(url, "http://localhost:9000");
  response.setHeader("content-type", "text/html;charset=utf-8");

  if (method === "GET" && pathname === "/login") {
    response.end("你好，登入頁");
  } else if (method === "GET" && pathname === "/reg") {
    response.end("你好，註冊頁");
  } else if (method === "GET" && pathname === "/") {
    response.end("你好，主頁");
  } else {
    response.end("找不到");
  }
});   // 不同分頁有不同的回應

server.listen(9000, () => {
  console.log("server is running http://localhost:9000");
});
