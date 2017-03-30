const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const mainProcess = remote.require('./main');
const shell = electron.shell;
const $ = require('jquery')

$('canvas').on('mousemove', (e) => {
  let x, y, pixel;
  let getMousePos = (canvas, e) => {
    var rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left,
    y = e.clientY - rect.top
  };
  pixel = this.getContext('2d').getImageData(x, y, 1, 1).data;
  $('#position-color').innerHTML(pixel);
});

$('canvas').on('click',(e) => {
  let x, y, pixel;
  let getMousePos = (canvas, e) => {
    var rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left,
    y = e.clientY - rect.top
  };
  pixel = this.getContext('2d').getImageData(x, y, 1, 1).data;
  $('#history').append(`<li>${pixel}</li>`);
})
