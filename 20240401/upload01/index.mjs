import express from "express";
import {resolve} from "path";
import multer from "multer";
const __dirname = import.meta.dirname;

const urlencoded = express.urlencoded({extended: false});
const upload = multer({dest: resolve(__dirname, "public")});

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/form1", (req, res) => {
    res.render("form1")
})

app.post("/upload1", upload.single("myFile"), (req, res) => {
    res.json({body: req.body, file: req.file});
    // console.log(req.body);
    // res.send("進入上傳流程")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})