import express from "express";
import moment from "moment";
import multer from "multer";
import connection from "../db2.mjs";

const router = express.Router();
const upload = multer();

router.get("/", (req, res) => {
  // res.send("導向今天日期")
  const date = moment().format("YYYY-MM-DD");
  res.redirect("/expe/d/" + date);
});

router.get("/d/:date", async (req, res) => {
  // res.send("讀取指定日期的所有消費: " + req.params.date);
  let date = req.params.date;
  const sort = await connection.execute("SELECT * FROM `sort`").then(datas => {
    return datas[0].map(r => {
      return {id: r.id, name: r.name};
    })
  });
  const [data] = await connection.execute(
    "SELECT * FROM `expense` WHERE `date` = ?",
    [date]
  ).catch(error => [[], undefined]);
  res.render("index", {date, sort, data})
});

router.post("/", async (req, res) => {
  let title = req.body.title;
  let money = parseInt(req.body.money);
  let sort = parseInt(req.body.sort);
  let date = req.body.date;
  let result = await connection.execute(
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);",
    [title, sort, money, date]
  ).then(results => {
    if(results[0].insertId > 0){
      return true;
    }else{
      return false;
    }
  }).catch(error => false);

  if(result){
    res.redirect("/expe/d/"+date);
  }else{
    res.send("新增錯誤，請洽管理人員")
  }
});

router.put("/", upload.none() ,async (req, res) => {
  let title = req.body.title;
  let money = parseInt(req.body.money);
  let sort = parseInt(req.body.sort);
  let date = req.body.date;
  let id = parseInt(req.body.id);
  let result = await connection.execute(
    "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
    [title, sort, money, date, id]
  ).then(results => {
    if(results[0].changedRows >= 1){
      return true;
    }else{
      return false;
    }
  }).catch(error => false);
  console.log(result);
  res.json({result});
});

router.delete("/", upload.none(), async (req, res) => {
  let id = parseInt(req.body.id);
  let result = await connection.execute(
    "DELETE FROM expense WHERE `expense`.`id` = ?",
    [id]
  ).then(results => {
    if(results[0].affectedRows >= 1){
      return true;
    }else{
      return false;
    }
  }).catch(error => false);
  res.json({result});
});

export default router;
