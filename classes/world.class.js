class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  layers = [
    new layer("assets/5_background/layers/3_third_layer/1.png"),
    new layer("assets/5_background/layers/2_second_layer/1.png"),
    new layer("assets/5_background/layers/1_first_layer/1.png"),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.character);

    this.enemies.forEach(enemy => {
      this.addToMap(enemy);
    });

    this.clouds.forEach(cloud => {
      this.addToMap(cloud);
    });

    this.layers.forEach(layer => {
      this.addToMap(layer);
    });

    // Draw wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }


addToMap(mo) {
  this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
