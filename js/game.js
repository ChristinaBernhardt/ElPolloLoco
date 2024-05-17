let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let i = 1;


// function startGame() {
// document.getElementById('overlay').innerHTML = /*html*/`
// <button onclick=init()>Start</button>
// `
// }

function init() {
  canvas = document.getElementById('canvas');
  document.getElementById('overlay').classList.add('display-none');
  canvas.style.display = 'block';
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

function stopGame(){
clearAllIntervals();
}


// Miza???
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
};


// function setStoppableInterval(fn, time) {
// let id = setInterval(fn, time);
// intervalIds.push(id);
// }

// setStoppableInterval(sayHello , 500);
// setStoppableInterval(sayGoodbye , 500);

// function stopGame(){
// intervalIds.forEach(clearInterval);
// }

// function sayHello(){
//   console.log('Hello', i);
//   i++;
// }


// function sayGoodbye(){
//   console.log('Goodbye', i);
//   i++;
// }