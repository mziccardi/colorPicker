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
  icon: './icon.png'
})

menubar.on('ready', function () {
  console.log('Application is ready!')
})

menubar.on('after-create-window', function () {
  menubar.window.loadURL(`file://${__dirname}/index.html`);
})


// build out multiple window functionality.
// create a new window on dropper button click
//how to make a transparent window.
  // let win = new BrowserWindow({transparent: true, frame: false})
  // win.show()
//that new window will feature a canvas with dimensions 100vw 100vh
