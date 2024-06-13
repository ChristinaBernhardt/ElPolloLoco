// Miza - warum werden Wolken nicht gewechselt?

class Cloud extends MovableObject {
  y = 20;

  height = 250;
  width = 400;
  speed = 0.015;

  IMAGES_CLOUDS = [
    "assets/5_background/layers/4_clouds/1.png",
    "assets/5_background/layers/4_clouds/2.png",
    "assets/5_background/layers/4_clouds/full.png",
  ];

  constructor(cloudPosition) {
    super().loadImage("assets/5_background/layers/4_clouds/1.png");
    this.loadImages(this.IMAGES_CLOUDS);
    var imageIndex = Math.round(Math.random() * 2);
    this.loadImage(this.IMAGES_CLOUDS[imageIndex]);
    this.x = cloudPosition;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveRight();
    }, 60 / 1000);
  }
}
