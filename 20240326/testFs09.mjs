import {createReadStream, createWriteStream} from "fs";
let rs = createReadStream("./video/movie.mp4");
// let ws = createWriteStream("./video/movie3.mp4");
/* 
let n = 0;
rs.on("data", chunk => {
    n++;
    console.log(`寫入中...${n}`);
    ws.write(chunk);
})
rs.on("end", () => {
    console.log("讀取結束");
    ws.end();
})
// 複製檔案 (方法三)
*/

let ws = createWriteStream("./video/movie4.mp4");
rs.pipe(ws);  // 複製檔案 (方法四)