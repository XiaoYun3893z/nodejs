import express from "express";
import {resolve} from "path";
const __dirname = import.meta.dirname;

const app = express();
app.use(express.static(resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})