const electron = require('electron');
const fs = require('fs');
// const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
// const dialog = electron.dialog;
// const Menu = electron.menu;
const Menubar = require('menubar')
const windows = new Set()

const menubar = Menubar({
  width: 75,
  height: 50,
  icon: './icon.png',
  alwaysOnTop: true
})

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
})


const createWindow = exports.createWindow = () => {
  let newWindow = new BrowserWindow({
    transparent: true,
    frame: true,
    width: 1080,
    height: 1080
    // fullscreen: true
  });
  windows.add(newWindow)

  newWindow.loadURL(`file://${__dirname}/canvas.html`);

  newWindow.once('ready-to-show', () => {
    newWindow.show();
    // newWindow.setFullScreen(true);
  });

  newWindow.on('close', (event) => {
    newWindow.destroy()
  });

  newWindow.on('closed', () => {
    windows.delete(newWindow)
    newWindow = null
  });

  return newWindow
}



//how to make a transparent window.
  // let win = new BrowserWindow({transparent: true, frame: false})
  // win.show()
//that new window will feature a canvas with dimensions 100vw 100vh
