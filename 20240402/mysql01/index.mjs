import express from "express";
import connection from "./db.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
});

app.get("/dd/:id", async (req, res) => {
  let sql = "SELECT * FROM `sort` WHERE `id` = ?";
  let dataAry = [req.params.id];
  let data = await getData(sql, dataAry).then(results => {
    if(results.length === 0){
      return undefined;
    }else{
      const {isvalid, ...others} = results[0];
      return others;
    }
  }).catch(error => undefined);
  console.log(data);
  if(data){
    res.json({data})
  }else[
    res.json({error: "找不到資料"})
  ]
});

app.get("/d/:id", (req, res) => {
  let id = req.params.id;
  connection.execute(
    "SELECT * FROM `sort` WHERE `id` = ?",
    [id],
    (error, results) => {
      if (error) {
        res.json({ error });
        return false;
      }
      // let data = results.map(item => {
      //     return {id: item.id, name: item.name}
      // })
      const { isvalid, ...data } = results[0];
      res.json({ results: data });
    }
  );
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});

function getData(sql, dataAry) {
  return new Promise((resolve, reject) => {
    connection.execute(
      sql,
      dataAry,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
        // if(results.length !== 0){
        //   const { isvalid, ...data } = results[0];
        //   return resolve(data);
        // }else{
        //   return resolve(undefined);
        // }
      }
    );
  });
}
