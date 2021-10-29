/*
 * @Author: your name
 * @Date: 2021-10-25 13:56:28
 * @LastEditTime: 2021-10-29 15:29:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/main/electron.ts
 */
import path from 'path';
import { app, BrowserWindow, ipcMain } from 'electron';

// 判断当前环境是不是development
const isDev_ENV = process.env.NODE_ENV === 'development';

// 获取程序绝对地址
const ROOT_PATH = path.join(app.getAppPath(), '../');
// 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

console.log(isDev_ENV);

const createWindow = () => {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    titleBarStyle: 'hidden',
    skipTaskbar: true,
    transparent: true,
    enableLargerThanScreen: true,
    type: 'textured',
    webPreferences: {
      // 打开调试工具
      devTools: true,
      // 注入node模块
      nodeIntegration: true,
    },
  });

  // 这是打开Electron项目的调试工具
  mainWindow.webContents.openDevTools();

  if (isDev_ENV) {
    // 在开发环境下，我们加载的是运行在3001端口的react
    mainWindow.loadURL('http://127.0.0.1:3001');
  } else {
    // 线上环境用的就是打包后的index.html
    mainWindow.loadFile(`file://${path.join(__dirname, '../../dist/index.html')}`);
  }
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    BrowserWindow.getAllWindows().length === 0 && createWindow();
  });
});
