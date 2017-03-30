const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;
var robot = require("robotjs");
const $ = require('jquery')

$('#open-dropper').on('click', (e)=>{
  mainProcess.createWindow();
})

$('#the-window').on('mousemove', () => {
  // let x, y, pixel;
  // let getMousePos = (canvas, e) => {
  //   var rect = canvas.getBoundingClientRect();
  //   x = e.clientX - rect.left,
  //   y = e.clientY - rect.top
  // };
  // pixel = this.getContext('2d').getImageData(x, y, 1, 1).data;
  // $('#position-color').innerHTML(pixel);
});

$('#the-window').on('click',(e) => {
  // let canvas = $('#the-window')
  // let x, y, pixel;
  // // let mousePosition = getMousePos(canvas, e)
  // var rect = canvas.getBoundingClientRect();
  mainProcess.robotTest()
  // console.log('pizza')

  // pixel = this.getContext('2d').getImageData(x, y, 1, 1).data;
  // $('#history').append(`<li>${pixel}</li>`);
  // console.log(`x${mousePosition.x}  y${mousePosition.y} `)
})

const getMousePos = (canvas, e) => {
  let rect = canvas.getBoundingClientRect();
  console.log(rect)
  return {x:e.clientX - rect.left, y:e.clientY - rect.top}
};
