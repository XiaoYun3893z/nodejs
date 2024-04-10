import { mkdir, readdir, rm } from "fs";

if(process.argv[2] === "mk"){
  mkdir("./html2", {recursive: true} ,error => {
    if(error){
      console.log("建立資料夾失敗");
      console.log(error);
      return false;
    }
    console.log("建立資料夾成功");
  });
}else if(process.argv[2] === "rd"){
  readdir("./video" , (error, files) => {
    if(error){
      console.log("讀取資料夾失敗");
      console.log(error);
      return false;
    }
    console.log(files);
  });
}else if(process.argv[2] === "rm"){
  rm("./aa", {recursive: true} ,error => {
    if(error){
      console.log("刪除資料夾失敗");
      console.log(error);
      return false;
    }
    console.log("刪除資料夾成功");
  });
}

// recursive，遞迴建立，不會覆蓋掉原本資料夾裡的檔案，只是確認有沒有建立資料夾