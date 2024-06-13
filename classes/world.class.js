class World {

character = new Character();
level = level1;
canvas;
ctx;
keyboard;
camera_x = 0;
statusBar = new StatusBar();
statusBarCoin = new StatusBarCoin();
statusBarBottle = new StatusBarBottle();
statusBarEndboss = new StatusBarEndboss();
throwableObjects = [];
play_sound = new Audio("audio/play.mp3");
chickendie_sound = new Audio("audio/chickendie.mp3");
collectBottle_sound = new Audio("audio/collectbottle.mp3");
collectCoin_sound = new Audio("audio/collectcoin.mp3");

  /**
 * Creates an instance of World.
 *
 * @constructor
 * @param {*} canvas
 * @param {*} keyboard
 */
constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.checkContactSalsa();
    this.checkContactCoin();
    this.play_sound.loop = true;
  }


  /**
 * place character into world
 * 
 */
setWorld() {
    this.character.world = this;
  }


  /**
 * run the game
 * 
 */
run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
      this.checkCollisionsEndbossBottle();
    }, 100);
  }


  /**
 * check throwable bottles
 * 
 */
checkThrowableObjects() {
    if (this.keyboard.D && this.character.bottles > 0) {
      this.character.bottles -= 10;
      this.statusBarBottle.setPercentage(this.character.bottles);
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }


  /**
 * check collisions between character an enemies
 * 
 */
checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (
          this.character.isAboveGround() &&
          (enemy instanceof Chicken || enemy instanceof Yellowchicken)
        ) {
          enemy.die();

          this.level.deleteEnemy(enemy);
          if (isSoundOn) {
            this.chickendie_sound.play();
          }
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }


  /**
 * check collisions between character an endboss
 * 
 */
checkCollisionsEndbossBottle() {
    this.level.enemies.forEach((enemy) => {
      if (enemy instanceof Endboss) {
        this.throwableObjects.forEach((bottle) => {
          if (enemy.isColliding(bottle) && !bottle.isExploded) {
            bottle.isExploded = true;
            bottle.animateSplash(bottle);
            enemy.hitEndboss();

            this.statusBarEndboss.setPercentage(enemy.energy);
            setTimeout(() => {
              this.throwableObjects.splice(bottle, 1);
            }, 80);
          }
        });
      }
    });
  }


  /**
 * check collisions between character an bottles
 * 
 */
checkContactSalsa() {
    setInterval(() => {
      this.level.salsas.forEach((salsa) => {
        if (this.character.isColliding(salsa)) {
          if (isSoundOn) {
            this.collectBottle_sound.play();
          }
          this.character.addBottle(salsa);
          this.level.deleteSalsa(salsa);
          this.statusBarBottle.setPercentage(this.character.bottles);
        }
      });
    }, 200);
  }


  /**
 * check collisions between character an coins
 * 
 */
checkContactCoin() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          if (isSoundOn) {
            this.collectCoin_sound.play();
          }
          this.character.addCoin(coin);
          this.level.deleteCoin(coin);
          this.statusBarCoin.setPercentage(this.character.coins);
        }
      });
    }, 200);
  }


  /**
 * draw canvas
 * 
 */
draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.layers);
    this.addObjectsToMap(this.level.clouds);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.salsas);
    this.addObjectsToMap(this.throwableObjects);
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarEndboss);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }


  /**
 * add objects
 *
 * @param {*} objects
 */
addObjectsToMap(objects) {
    objects.forEach((obj) => {
      this.addToMap(obj);
    });
  }


  /**
 * add to map
 *
 * @param {*} mo
 */
addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }


  /**
 * flip image
 *
 * @param {*} mo
 */
flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  
  /**
 * flip image back
 *
 * @param {*} mo
 */
flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
