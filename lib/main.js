const electron = require('electron');
const fs = require('fs');
const BrowserWindow = electron.BrowserWindow;
const Menubar = require('menubar');
const windows = new Set();
const robot = require('robotjs');
const $ = require('jquery');



const menubar = Menubar({
  width: 400,
  height: 400,
  icon: __dirname + './images/color-icon.png',
  alwaysOnTop: true
});


menubar.on('after-create-window', () => {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
  // menubar.window.openDevTools();
});


const createWindow = exports.createWindow = () => {
  let screen = robot.getScreenSize();

  let newWindow = new BrowserWindow({
    transparent: true,
    frame: true,
    width: screen.width,
    height: screen.height
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
  });

  return newWindow
};


const getColors = exports.getColors = () => {
  let mouse = robot.getMousePos()
  let hex = robot.getPixelColor(mouse.x, mouse.y)
  return {mouse, hex}
};

electron.ipcMain.on('canvas-clicked', (e, hexValue)=> {
  menubar.window.webContents.send('message', hexValue)
});
