import { resolve, join, sep, parse } from "path";

// console.log(resolve(import.meta.dirname, "fff.mpa"));

//console.log(sep);

// console.log(parse(import.meta.dirname));
console.log(parse(import.meta.filename));    // 跟第7行相比，可以得到更詳細的路徑