// 作業四:
// 如同第一個作業的需求，建立編號 1 ~ 20 的 .html 檔，但需要補 0
// 建立在 zero 這個資料夾下，請去查詢語法，如果沒有該資料夾，就建立資料夾
// 使用 sync 系列的語法操作，並使用 sync 系列的偵錯語法撰寫流程

import { mkdirSync, writeFileSync } from 'fs';
const createFolder = (folderName) => {
  try {
    mkdirSync(folderName);
    console.log(`已建立資料夾：${folderName}`);
  } catch (error) {
    console.error(`無法建立資料夾 ${folderName}：`, error);
  }
};

const padNumber = (number) => {
  return number.toString().padStart(2, '0');
};

const createHTMLFiles = () => {
  try {
    createFolder('zero');
    for (let i = 1; i <= 20; i++) {
      const paddedNumber = padNumber(i);
      const fileName = `zero/work${paddedNumber}.html`;
      const fileContent = `<!DOCTYPE html>
<html>
<head>
  <title>Work ${paddedNumber}</title>
</head>
<body>
  <h1>這是第 ${i} 個 HTML 檔</h1>
</body>
</html>`;
      writeFileSync(fileName, fileContent);
      console.log(`已建立檔案：${fileName}`);
    }
  } catch (error) {
    console.error('無法建立 .html 檔案：', error);
  }
};
createHTMLFiles();

