const path = require('path');
const { app, BrowserWindow } = require('electron');

const  createWindow = ()=>{
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width:1200,
        height:800,
        webPreference:{
            // 注入node模块
            nodeIntegration: true, 
        }
    })
    mainWindow.loadFile('index.html');
}

app.whenReady().then(()=>{
    createWindow();
    app.on('activate',()=>{
        BrowserWindow.getAllWindows().length === 0 && createWindow();
    })
})