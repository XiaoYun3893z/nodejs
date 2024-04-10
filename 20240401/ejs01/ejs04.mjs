import express from "express";
import ejs from "ejs";
import {readFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

let user;

const bp = express.urlencoded({extended: false});

const app = express();

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/test1", (req, res) => {
    const name = "Ken";
    const str = "Hello !";
    res.render("test1", {name,str});
})

app.get("/test2", (req, res) => {
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2", {blackpink});
})

app.get("/test3", (req, res) => {
    res.render("test3", {user});
})

app.post("/login", bp, (req, res) => {
    const {account, password} = req.body;
    if(account === "ben" && password === "a12345"){
        user = {
            name: "Annette Richardson",
            img: "https://randomuser.me/api/portraits/women/60.jpg"
        };
        res.redirect("/test3");
    }else{
        res.redirect("/test3");
    }
});

app.get("/logout", (req, res) => {
    user = undefined;
    res.redirect("/test3");
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})