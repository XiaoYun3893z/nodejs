import http from "http";
let body = "";

const server = http.createServer((request, response) => {

    request.on("data", chunk => {
        body += chunk;
    });
    request.on("end", chunk => {
        body +=chunk;
        console.log(body);
        response.setHeader("content-type", "text/html;charset=utf-8");
        response.end("你好主機");
});
});

server.listen(9000, () => {
console.log("server is running http://localhost:9000");
});
