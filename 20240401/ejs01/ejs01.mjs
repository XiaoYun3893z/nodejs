import ejs from "ejs";
import {readFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

const name = "Ken";
const str = "Hello !";

// console.log(`${str}, ${name}`);
const template = await readFile(resolve(__dirname, "template01.html")).then(result => result.toString());
const result = ejs.render(
    template,
    {name, str}
);
console.log(result);