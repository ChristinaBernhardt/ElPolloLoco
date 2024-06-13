let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;
let isSoundOn = true;
let audioElements = [];
play_sound = new Audio("audio/play.mp3");
this.play_sound.loop = true;


/**
 * init game
 * 
 */
function init() {
  initLevel();
  bindBtsPressEvents();
  initAudio();
  canvas = document.getElementById("canvas");
  document.getElementById("overlay").classList.add("display-none");
  document.getElementById("iconBar").classList.add("display-flex");
  document.getElementById("iconBarMobile").classList.add("display-flex");
  canvas.style.display = "block";
  world = new World(canvas, keyboard);
}


/**
 * animate mobile buttons
 * 
 */
function bindBtsPressEvents() {
  document.getElementById("leftButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("leftButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("rightButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("rightButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("jumpButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("jumpButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById("fireButton").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("fireButton").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
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
});


/**
 * opens function clear all intervals
 * 
 */
function stopGame() {
  clearAllIntervals();
}


/**
 * won game
 * 
 */
function wonGame() {
  clearAllIntervals();
}


/**
 * clear all intervals
 * 
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * enter fullscreen
 *
 * @param {*} element
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
    document.getElementById("fullscreenButton").classList.add("display-none");
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
}


/**
 * exit fullscreen
 * 
 */
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document
      .getElementById("fullscreenButton")
      .classList.remove("display-none");
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    document
      .getElementById("fullscreenButton")
      .classList.remove("display-none");
  }
}


/**
 * sound on
 * 
 */
function soundOn() {
  isSoundOn = true;
  audioElements.forEach((audio) => {
    audio.muted = false;
  });
  document.getElementById("soundOn").classList.remove("display-none");
  document.getElementById("soundOff").classList.add("display-none");
}


/**
 * sound off
 * 
 */
function soundOff() {
  isSoundOn = false;
  audioElements.forEach((audio) => {
    audio.muted = true;
  });
  document.getElementById("soundOff").classList.remove("display-none");
  document.getElementById("soundOn").classList.add("display-none");
}


/**
 * init audio
 * 
 */
function initAudio() {
  audioElements = document.querySelectorAll("audio");
}

document.addEventListener("DOMContentLoaded", initAudio);
