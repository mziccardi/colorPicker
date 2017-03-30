const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;
const $ = require('jquery')

const $history = $('#history')

$('#open-dropper').on('click', (e)=>{
  mainProcess.createWindow();
})

$('#the-window').on('mousemove', () => {
  let pixelColor = mainProcess.robotTest()
  $('#position-color').innerHTML(pixelColor);
});

$('#the-window').on('click',(e) => {
  let pixelColor = mainProcess.robotTest()
  ipc.send('canvas-clicked', pixelColor)
})
