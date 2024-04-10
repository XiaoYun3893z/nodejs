/* 作業一:
這一支 js 要能用迴圈產生 20 個 HTML 檔
HTML 檔的名稱要是 work 開頭，然後加上數字，數字不補 0
HTML 檔內要有標準的 HTML 基本格式
HTML 檔的內容要用 h1 標籤，然後寫上「這是第 N 個 HTML 檔」
*/
import { writeFile } from 'fs';
const HTMLContent = (index) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>work${index}</title>
</head>
<body>
  <h1>這是第${index}個 HTML 檔</h1>
</body>
</html>`;
};

const HTMLFile = (index) => {
  const fileName = `work${index}.html`;
  const fileContent = HTMLContent(index);
  
  writeFile(fileName, fileContent, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`${fileName} 已生成`);
    }
  });
};

for (let i = 1; i <= 20; i++) {
  HTMLFile(i);
}


