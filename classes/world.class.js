class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  mute = false;
  statusBar = new StatusBar();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  statusBarEndboss = new StatusBarEndboss();
  throwableObjects = [];

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.checkContactSalsa();
    this.checkContactCoin();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
      this.checkCollisionsEndbossBottle()
    }, 200);
  }

  checkThrowableObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (
          this.character.isAboveGround() &&
          (enemy instanceof Chicken || enemy instanceof Yellowchicken)
        ) {
          enemy.die();
          this.level.deleteEnemy(enemy);
        } else {
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
          // console.log(
          //   "collision with Character, energy ",
          //   this.character.energy
          // );
        }
      }
    });
  }

  checkCollisionsEndbossBottle() {
     this.level.enemies.forEach((enemy) => {
      if (enemy instanceof Endboss) {
        this.throwableObjects.forEach((bottle) => {
          if (enemy.isColliding(bottle)) {
            console.log("treffer");
           enemy.hitEndboss();
            // this.level.enemies.hitEndboss();
           this.statusBarEndboss.setPercentage(this.endboss);
            console.log("collision with Endboss, energy ", endboss.energy);
          }
        });
      }
    });
  }

  checkContactSalsa() {
    setInterval(() => {
      this.level.salsas.forEach((salsa) => {
        if (this.character.isColliding(salsa)) {
          this.character.addBottle(salsa);
          this.level.deleteSalsa(salsa);
          this.statusBarBottle.setPercentage(this.character.bottles);
          // console.log(
          //   "collision with Character, salsa ",
          //   this.character.bottles
          // );
        }
      });
    }, 200);
  }

  checkContactCoin() {
    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.character.addCoin(coin);
          this.level.deleteCoin(coin);
          this.statusBarCoin.setPercentage(this.character.coins);
          // console.log("collision with Character, coin ", this.character.coins);
        }
      });
    }, 200);
  }

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

    // Draw wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((obj) => {
      this.addToMap(obj);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    this.ctx.restore();
    mo.x = mo.x * -1;
  }
}
