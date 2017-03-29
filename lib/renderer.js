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
  let img = document.createElement('img')
  img.src = file

  // console.log(content)

  document.querySelector('.content').append(img)
})

// document.querySelector('.play-btn').addEventListener('click', () => {
//   mainProcess;
// });
