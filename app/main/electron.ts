import path from 'path';
import { app, BrowserWindow } from 'electron';

// 判断当前环境是不是development
const isDev_ENV = process.env.NODE_ENV === 'development';

console.log(isDev_ENV);

const createWindow = () => {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            // 打开调试工具
            devTools: true,
            // 注入node模块
            nodeIntegration: true,
        }
    })
    
    // 这是打开Electron项目的调试工具
    mainWindow.webContents.openDevTools();

    if (isDev_ENV) {
        // 在开发环境下，我们加载的是运行在3001端口的react
        mainWindow.loadURL('http://127.0.0.1:3001');
    } else {
        // 线上环境用的就是打包后的index.html
        mainWindow.loadFile(`file://${path.join(__dirname, '../../dist/index.html')}`);
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        BrowserWindow.getAllWindows().length === 0 && createWindow();
    })
})