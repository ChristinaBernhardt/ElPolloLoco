let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;


function init() {
  initLevel();
  canvas = document.getElementById('canvas');
  document.getElementById('overlay').classList.add('display-none');
  canvas.style.display = 'block';
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
      }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 68) {
    keyboard.D = true;
  }

});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
      keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
      keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
      keyboard.UP = false;
    }
    if (e.keyCode == 40) {
      keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
      keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
      keyboard.D = false;
    }

  }
);

function stopGame(){
clearAllIntervals();
}

function wonGame(){
  clearAllIntervals();
  }

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
};

function enterFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
    document.getElementById('fullscreenButton').classList.add("display-none");
  } else if(element.msRequestFullscreen) {      
    element.msRequestFullscreen();
  } else if(element.webkitRequestFullscreen) {  
    element.webkitRequestFullscreen();
  }
}


function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
    document.getElementById('fullscreenButton').classList.remove("display-none");
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    document.getElementById('fullscreenButton').classList.remove("display-none");
  }}

  function soundOn() {
console.log('mute');
document.getElementById('soundOn').classList.remove("display-none");
document.getElementById('soundOff').classList.add("display-none");
  }

  function soundOff() {
    console.log('unmute');
    document.getElementById('soundOff').classList.remove("display-none");
    document.getElementById('soundOn').classList.add("display-none");
      }
