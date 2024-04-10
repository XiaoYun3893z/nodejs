import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁")
})
// http://localhost:3000/p/CvZP-PIguWG/
// http://localhost:3000/p/CvRz0e3Awmi/

app.get("/p/:id", (req, res) => {
  let content = "";
  if(req.params.id === "CvZP-PIguWG"){
    content = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》"
  }else if(req.params.id === "CvRz0e3Awmi"){
    content = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》"
  }
  res.send(content)
})

app.get("/users/:userID", (req, res) => {
  const {userID} = req.params;
  res.send(`<h1>${userID} 的首頁</h1>`)
})

app.get("/books/:categoryID/:bookID", (req, res) => {
  const {categoryID, bookID} = req.params;
  res.send(`分類是: ${categoryID}, 書本的編號是: ${bookID}`);
})

app.get("/user/:name?", (req, res) => {
  if(req.params.name){
    res.send(`你好, ${req.params.name}`);
  }else{
    res.send("你好,訪客");
  }
})

app.get("/use/:id([0-9]+)", (req, res) => {
  res.send(`user id is ${req.params.id}`);
});

app.get("/files/*",(req, res) => {
  let filePath = req.params[0];
  res.send(`file path: ${filePath}`);
});


app.listen(3000, () => {
  console.log("running at http://localhost:3000");
})
