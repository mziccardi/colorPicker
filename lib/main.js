const electron = require('electron');
const fs = require('fs');
const BrowserWindow = electron.BrowserWindow;
const Menubar = require('menubar')
const windows = new Set()
const robot = require('robotjs')
const $ = require('jquery')

const menubar = Menubar({
  width: 75,
  height: 100,
  icon: './icon.png',
  alwaysOnTop: true
})

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
  // menubar.window.openDevTools();
})




const createWindow = exports.createWindow = () => {
  let newWindow = new BrowserWindow({
    transparent: true,
    frame: true,
    width: 1080,
    height: 1080,
    parent: menubar
    // fullscreen: true
  });
  windows.add(newWindow)

  newWindow.loadURL(`file://${__dirname}/canvas.html`);

  newWindow.once('ready-to-show', () => {
    newWindow.show();
  });

  newWindow.on('close', (event) => {
    newWindow.destroy()
  });

  newWindow.on('closed', () => {
    windows.delete(newWindow)
    newWindow = null
  });

  newWindow.on('blur', (event) =>{
    newWindow.destroy()
  })

  return newWindow
}




const robotTest = ()=>{
  let mouse = robot.getMousePos()
  let hex = robot.getPixelColor(mouse.x, mouse.y)
  return hex
}

electron.ipcMain.on('canvas-clicked', (e, hexValue)=> {
  menubar.window.webContents.send('message', hexValue)
});

exports.robotTest = robotTest
