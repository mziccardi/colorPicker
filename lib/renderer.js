const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;



document.querySelector('#open-file').addEventListener('click',()=>{
  mainProcess.openFile();
})

ipc.on('file-opened', (event, file, content)=>{
  console.log('this is horse shit')
  currentFile = file

  document.querySelector('.content').append(content)
})

// document.querySelector('.play-btn').addEventListener('click', () => {
//   mainProcess;
// });
