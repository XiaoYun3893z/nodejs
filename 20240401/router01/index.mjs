import express from "express";
import usersRouter from "./routes/users.mjs";
import rootRouter from "./routes/root.mjs";

const app = express();

app.use(rootRouter);
app.use("/users" ,usersRouter);


app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})