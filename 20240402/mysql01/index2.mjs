import express from "express";
import connection from "./db2.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
});

app.get("/gg/:id", async (req, res) => {
    const [results] = await connection.execute(
        "SELECT * FROM `sort` WHERE `id` = ?",
        [req.params.id]
    ).catch(error => [undefined]);
    console.log(results);
    if(results){
        res.json(results);
    }else{
        res.json({error: "找不到資料"});
    }
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});

