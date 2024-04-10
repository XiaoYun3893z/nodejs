import express from "express";
import cors from "cors";
import multer from "multer";
import session from "express-session";

const users = {
    "ben": {
        account: "ben",
        password: "a12345",
        img: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    "mary": {
        account: "mary",
        password: "a12345",
        img: "https://randomuser.me/api/portraits/men/93.jpg"
    }
}

const upload = multer();

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

const sessionOptions = {
    secret: "benbenben",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1200000
    }
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(session(sessionOptions));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.post("/login", upload.none() ,(req, res) => {
    const {account, password} = req.body;
    if(users[account] && users[account].password === password){
        const {password, ...user} = users[account];
        req.session.user = user;
        res.json({message: "歡迎光臨", user});
    }else{
        res.json({message: "不受歡迎"});
    }
});

app.get("/checkLogin", (req, res) => {
    const {user} = req.session;
    if(user){
        res.json({message: "歡迎再度光臨", user});
    }else{
        res.json({message: "不受歡迎"});
    }
});

app.get("/logout",(req, res) => {
    delete req.session.user;
    res.json({message: "謝謝光臨"});

});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})
// 一個非常會產生錯誤的原因，就是 liver server 開啟的網頁用 localhost 而 nodeJS 的 server 用 127.0.0.1