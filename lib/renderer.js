const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;



document.querySelector('#open-file').addEventListener('click',()=>{
  mainProcess.openFile();
})

// document.querySelector('.play-btn').addEventListener('click', () => {
//   mainProcess;
// });
