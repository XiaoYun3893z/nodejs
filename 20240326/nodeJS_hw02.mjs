// 作業二:將 workN.html 檔案搬移到 work 資料夾下
import { rename, renameSync, mkdirSync } from 'fs';
const createWorkFolder = () => {
  try {
    mkdirSync('work');
    console.log('已創建 work 資料夾');
  } catch (error) {
    console.error('無法創建 work 資料夾：', error);
  }
};
const moveFileToWorkFolder = (index) => {
  const oldFileName = `work${index}.html`;
  const newFileName = `work/work${index}.html`;

  rename(oldFileName, newFileName, (error) => {
    if (error) {
      console.error(`無法移動檔案 ${oldFileName}：`, error);
    } else {
      console.log(`已將檔案 ${oldFileName} 移動至 work 資料夾`);
    }
  });
};

createWorkFolder();

for (let i = 1; i <= 20; i++) {
  moveFileToWorkFolder(i);
}
