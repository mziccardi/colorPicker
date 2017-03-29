const electron = require('electron');
const fs = require('fs');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;
const Menu = electron.menu;


app.on('ready', () => {
  console.log('application is ready');

  mainWindow = new BrowserWindow({
    title:'colorDrop'
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('open-file', function (event, file) {
  var content = fs.readFileSync(file).toString();
  mainWindow.webContents.send('file-opened', file, content);
});
const openFile = ()=>{
  let files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      {
        name:'Image files',
        extensions:['jpeg', 'jpg', 'png', 'svg']
      }
    ]
  });
  if(!files) {return;}

  let file = files[0]

  app.addRecentDocument(file);

  let content = fs.readFileSync(file).toString()
  mainWindow.webContents.send('file-opened', file, content)
};


exports.openFile = openFile
