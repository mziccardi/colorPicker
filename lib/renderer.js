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
  let canvas = $('canvas')
  draw()
});

$('#the-window').on('click',(e) => {
  let pixelColor = mainProcess.robotTest().hex
  ipc.send('canvas-clicked', pixelColor)
})

$('#clear-em').on('click', (e)=>{
  $('#history').empty()
})

const draw = () => {
      let canvas = document.querySelector('canvas');
      let x = mainProcess.robotTest().mouse.x
      let y = mainProcess.robotTest().mouse.y
      let pixelColor = mainProcess.robotTest().hex
      console.log(x, y)
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = `#${pixelColor}`;
      ctx.fillRect(0, 0, 50, 50);
      // ctx.beginPath();
      // ctx.arc(x, y, 10, 0, 2 * Math.PI);
      // ctx.fillStyle = `#${pixelColor}`;
      // ctx.fill();
    }
