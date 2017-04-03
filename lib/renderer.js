const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;
const $ = require('jquery');

const $history = $('#history');

$('#open-dropper').on('click', (e)=>{
  mainProcess.createWindow();
});

$('#the-window').on('mousemove', () => {
  let canvas = $('canvas')
  draw()
});

$('#the-window').on('click',(e) => {
  let pixelColor = mainProcess.getColors().hex
  ipc.send('canvas-clicked', pixelColor)
});

$('#clear-em').on('click', (e) => {
  $('#history').empty()
});

$('#quit').on('click', (e) => {
  let window = remote.getCurrentWindow();
  window.close();
})

const draw = () => {
      let canvas = document.querySelector('canvas');
      let x = mainProcess.getColors().mouse.x
      let y = mainProcess.getColors().mouse.y
      let pixelColor = mainProcess.getColors().hex
      console.log(x, y)
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = `#${pixelColor}`;
      ctx.fillRect(0, 0, 50, 50);
      // ctx.beginPath();
      // ctx.arc(x, y, 10, 0, 2 * Math.PI);
      // ctx.fillStyle = `#${pixelColor}`;
      // ctx.fill();
    }
