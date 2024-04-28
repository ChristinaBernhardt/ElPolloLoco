class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
this.ctx.drawImage(this.character.img, this.character.x, this.character.y,  this.character.width, this.character.height);

if (this.enemies.length > 0) {
    this.ctx.drawImage(this.Chicken.img, this.Chicken.x, this.Chicken.y,  this.Chicken.width, this.Chicken.height);
    
}

  }
}
