import { stat } from "fs";

stat("./video", (error, stats) => {
    if(error){
        console.log("讀取狀態失敗");
        console.log(error);
        return false;
    }
    console.log(stats);
    console.log(stats.isFile());     //檢查是否對應一個常規的檔案
    console.log(stats.isDirectory());  //檢查是否對應一個目錄，以上兩種方法可以幫助你確定特定路徑對應的是哪種類型的檔案
});