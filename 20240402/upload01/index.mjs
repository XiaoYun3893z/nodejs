import express from "express";
import { resolve, extname } from "path";
import multer from "multer";
import { rename } from "fs/promises";
import { v4 as uuidv4 } from "uuid";
const __dirname = import.meta.dirname;

const urlencoded = express.urlencoded({ extended: false });
const upload = multer({ dest: resolve(__dirname, "public") });

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("網站首頁");
});

app.get("/form1", (req, res) => {
  res.render("form1");
});

app.get("/form2", (req, res) => {
  res.render("form2");
});

app.get("/form3", (req, res) => {
  res.render("form3");
});

app.post("/upload3", upload.array("myFile[]", 3), async (req, res) => {
  req.body.files = [];
  for(let file of req.files){
    const ext = extname(file.originalname);
    const newFileName = file.filename + ext;
    await rename(file.path, resolve(__dirname, "public", "images", newFileName));
    req.body.files.push(newFileName);
  }
  res.json({ body: req.body });
})

app.post("/upload2", upload.array("myFile", 3), async (req, res) => {
  req.body.files = [];
  // req.files.forEach((file) => {
  // forEach 不會等待非同步執行的結果回傳, 所以改成 for...of
  // });
  for(let file of req.files){
    const ext = extname(file.originalname);
    const newFileName = file.filename + ext;
    await rename(file.path, resolve(__dirname, "public", "images", newFileName));
    req.body.files.push(newFileName);
  }
  res.json({ body: req.body });
});

app.post("/upload1", upload.single("myFile"), async (req, res) => {
  const ext = extname(req.file.originalname);
  // 1. 使用multer的暫存檔名當做新檔名
  // const newFileName = req.file.filename + ext;
  // 2. 使用 timestamp 當做新檔名
  // const timestamp = Date.now();
  // const newFileName = timestamp + ext;
  // 3. 使用uuidv4當做新檔名
  const newFileName = uuidv4() + ext;
  await rename(
    req.file.path,
    resolve(__dirname, "public", "images", newFileName)
  );
  req.body.fileName = newFileName;
  res.json({ body: req.body });
  // console.log(req.body);
  // res.send("進入上傳流程")
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});
