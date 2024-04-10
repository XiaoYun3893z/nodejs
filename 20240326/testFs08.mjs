import {readFileSync, writeFileSync, readFile, writeFile} from "fs";

// let data = readFileSync("./video/movie.mp4");
// writeFileSync("./video/movie1.mp4", data);    // 複製檔案 (方法一)

// 複製檔案 (方法二)
const write = (data) => {
    writeFile("./video/movie2.mp4", data, error => {
        if(error){
            console.log(error);
            return false;
        }
    })
}

readFile("./video/movie.mp4", (error, data) =>{
    if(error){
        console.log(error);
        return false;
    }
    write(data);
});