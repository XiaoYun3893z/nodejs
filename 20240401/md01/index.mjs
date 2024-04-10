import express from "express";
import moment from "moment";
import {appendFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

const app = express();

const writeToLog = (req, res, next) => {
    const {ip, path} = req;
    let time = moment().format("YYYY-MM-DDTHH:mm:ss")
    // console.log(`${time} ${ip} ${path}`);
    appendFile(resolve(__dirname, "access.log"), `${time} ${ip} ${path}\r\n`);
    req.ben = "你好";
    next();
}

const checkLogin = (req, res, next) => {
    if(req.query.code === "464"){
        next();
    }else{
        res.send("請先登入")
    }
}

app.use(writeToLog);

app.get("/", (req, res) => {
    
    res.send("網站首頁" + req.ben)
})

app.get("/login", (req, res) => {
    
    res.send("登入頁")
});

app.get("/reg", (req, res) => {
    res.send("註冊頁")
});

app.get("/admin", checkLogin,(req, res) => {
    res.send("後台")
});

app.get("/setting", checkLogin,(req, res) => {
    res.send("設定頁面")
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})