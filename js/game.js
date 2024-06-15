let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let isSoundOn = true;
let audioElements = [];
let play_sound = new Audio("audio/play.mp3");
play_sound.loop = true;

/**
 * Initializes the game.
 * This function sets up the initial level, binds button press events for mobile devices,
 * initializes audio elements, and prepares the game world.
 */
function init() {
  initLevel();
  bindBtsPressEvents();
  initAudio();
  canvas = document.getElementById("canvas");
  document.getElementById("overlay").classList.add("display-none");
  document.getElementById("iconBar").classList.add("display-flex");
  document.getElementById("iconBarMobile").classList.add("mobileIconShow");
  canvas.style.display = "block";
  world = new World(canvas, keyboard);
}

/**
 * Binds touch events for mobile buttons.
 * Touch events are used to control left, right, jump, and fire actions.
 */
function bindBtsPressEvents() {
  document.getElementById("leftButton").addEventListener("touchstart", handleLeftButtonTouchStart, { passive: false });
  document.getElementById("leftButton").addEventListener("touchend", handleLeftButtonTouchEnd, { passive: false });

  document.getElementById("rightButton").addEventListener("touchstart", handleRightButtonTouchStart, { passive: false });
  document.getElementById("rightButton").addEventListener("touchend", handleRightButtonTouchEnd, { passive: false });

  document.getElementById("jumpButton").addEventListener("touchstart", handleJumpButtonTouchStart, { passive: false });
  document.getElementById("jumpButton").addEventListener("touchend", handleJumpButtonTouchEnd, { passive: false });

  document.getElementById("fireButton").addEventListener("touchstart", handleFireButtonTouchStart, { passive: false });
  document.getElementById("fireButton").addEventListener("touchend", handleFireButtonTouchEnd, { passive: false });
}

/**
 * Handles touch start on the left button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleLeftButtonTouchStart(e) {
  e.preventDefault();
  keyboard.LEFT = true;
}

/**
 * Handles touch end on the left button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleLeftButtonTouchEnd(e) {
  e.preventDefault();
  keyboard.LEFT = false;
}

/**
 * Handles touch start on the right button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleRightButtonTouchStart(e) {
  e.preventDefault();
  keyboard.RIGHT = true;
}

/**
 * Handles touch end on the right button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleRightButtonTouchEnd(e) {
  e.preventDefault();
  keyboard.RIGHT = false;
}

/**
 * Handles touch start on the jump button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleJumpButtonTouchStart(e) {
  e.preventDefault();
  keyboard.SPACE = true;
}

/**
 * Handles touch end on the jump button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleJumpButtonTouchEnd(e) {
  e.preventDefault();
  keyboard.SPACE = false;
}

/**
 * Handles touch start on the fire button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleFireButtonTouchStart(e) {
  e.preventDefault();
  keyboard.D = true;
}

/**
 * Handles touch end on the fire button.
 * @param {TouchEvent} e - The touch event object.
 */
function handleFireButtonTouchEnd(e) {
  e.preventDefault();
  keyboard.D = false;
}

/**
 * Handles keydown events for keyboard controls.
 * @param {KeyboardEvent} e - The keydown event object.
 */
window.addEventListener("keydown", function(e) {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  } else if (e.keyCode == 37) {
    keyboard.LEFT = true;
  } else if (e.keyCode == 32) {
    keyboard.SPACE = true;
  } else if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

/**
 * Handles keyup events for keyboard controls.
 * @param {KeyboardEvent} e - The keyup event object.
 */
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  } else if (e.keyCode == 37) {
    keyboard.LEFT = false;
  } else if (e.keyCode == 32) {
    keyboard.SPACE = false;
  } else if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

/**
 * Stops the game by clearing all intervals.
 * This function clears any active intervals used for game updates.
 */
function stopGame() {
  clearAllIntervals();
}

/**
 * Ends the game when the player wins.
 * This function clears all active intervals when the player wins the game.
 */
function wonGame() {
  clearAllIntervals();
}

/**
 * Clears all active intervals.
 * This function iterates through all stored interval IDs and clears them.
 */
function clearAllIntervals() {
  intervalIds.forEach(id => clearInterval(id));
  intervalIds = [];
}

/**
 * Enters fullscreen mode for the given element.
 * @param {Element} element - The HTML element to enter fullscreen mode.
 * This function attempts to request fullscreen mode for the specified element.
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
 * Exits fullscreen mode.
 * This function exits fullscreen mode if the document is currently in fullscreen mode.
 */
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    document.getElementById("fullscreenButton").classList.remove("display-none");
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    document.getElementById("fullscreenButton").classList.remove("display-none");
  }
}

/**
 * Turns on sound.
 * This function unmutes all audio elements and updates UI to indicate sound is on.
 */
function soundOn() {
  isSoundOn = true;
  audioElements.forEach(audio => {
    audio.muted = false;
  });
  document.getElementById("soundOn").classList.remove("display-none");
  document.getElementById("soundOff").classList.add("display-none");
}

/**
 * Turns off sound.
 * This function mutes all audio elements and updates UI to indicate sound is off.
 */
function soundOff() {
  isSoundOn = false;
  audioElements.forEach(audio => {
    audio.muted = true;
  });
  document.getElementById("soundOff").classList.remove("display-none");
  document.getElementById("soundOn").classList.add("display-none");
}

/**
 * Initializes audio elements on DOMContentLoaded.
 * This function selects all audio elements on the page and prepares them for use.
 */
function initAudio() {
  audioElements = document.querySelectorAll("audio");
}

document.addEventListener("DOMContentLoaded", initAudio);
