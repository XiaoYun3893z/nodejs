import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);
  const {method, url, httpVersion, headers} = req;
  // 以上是 http 模組本來就有的，以下是 express 新的屬性和方法
  const {path, query, ip} = req;
  console.log(req.get("user-agent"));
  console.log(req.get("cookie"));
})


app.listen(3000, () => {
  console.log("server is at http://localhost:3000");
})