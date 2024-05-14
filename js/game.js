let canvas;
let world;
let keyboard = new Keyboard();

function startGame() {
document.getElementById('overlay').innerHTML = /*html*/`
<button onclick=init()>Start</button>
`
}

function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  console.log("My Character is", world.character);
}

// let space = false;
// let left = false;
// let RIGHT = false;

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

  // console.log(e);

  // console.log("Hello", keyboard);
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
  
    // console.log(e);
  }
);