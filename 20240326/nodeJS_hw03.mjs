// 作業三:請將 work 資料夾內的檔案讀取出來，發現檔名流水編號不足兩位數的補零

import { readdirSync, readFileSync, writeFileSync, unlinkSync } from "fs"; 
// readdirSync:讀取資料夾中的檔案列表，readFileSync:讀取檔案的內容

// 讀取 work 資料夾內的檔案
const readFilesInWorkFolder = () => {
  try {
    const files = readdirSync("work");
    files.forEach((file) => {
      const filePath = `work/${file}`;
      const fileContent = readFileSync(filePath, "utf-8");
      console.log(`檔案名稱：${file}`);
      console.log(`內容：\n${fileContent}`);
    });
  } catch (err) {
    console.error("無法讀取 work 資料夾內的檔案：", err);
  }
};

// 補足檔名的流水編號為兩位數
const padFileNumber = (fileName) => {
  const fileNumber = fileName.match(/\d+/)[0];
  const paddedFileNumber = fileNumber.padStart(2, "0");
  return fileName.replace(/\d+/, paddedFileNumber);
};

// 將 work 資料夾內的檔案流水編號補零並刪除原始檔案
const padFileNumbersInWorkFolder = () => {
  try {
    const files = readdirSync("work");
    files.forEach((file) => {
      const oldFilePath = `work/${file}`;
      const newFileName = padFileNumber(file);
      const newFilePath = `work/${newFileName}`;

      if (file !== newFileName) {
        writeFileSync(newFilePath, readFileSync(oldFilePath));
        console.log(`已補零檔名：${file} -> ${newFileName}`);
        unlinkSync(oldFilePath); // 刪除原始檔案
      }
    });
  } catch (err) {
    console.error("無法處理 work 資料夾內的檔案：", err);
  }
};

// 讀取 work 資料夾內的檔案並顯示內容
readFilesInWorkFolder();

// 補足檔名的流水編號為兩位數並刪除原始檔案
padFileNumbersInWorkFolder();
