import express from "express";
import cors from "cors";

const whiteList = ["http://localhost:5500", "http://127.0.0.1:5500"];
const corsOptions = {
    credentials: true,
    origin(origin, callback){
        if(!origin || whiteList.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("不允許傳遞資料"))
        }
    }
}

const app = express();
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.post("/login", (req, res) => {
    res.json({result: "歡迎光臨"});
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})