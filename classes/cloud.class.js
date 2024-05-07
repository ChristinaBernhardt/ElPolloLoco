// Miza - warum werden Wolken nicht gewechselt?

class Cloud extends MovableObject {
  y = 20;
  height = 250;
  width = 400;

  IMAGES_CLOUDS = [
    "assets/5_background/layers/4_clouds/1.png",
    "assets/5_background/layers/4_clouds/2.png",
    "assets/5_background/layers/4_clouds/full.png",
  ];

  constructor() {
    super().loadImage("assets/5_background/layers/4_clouds/1.png");
    this.loadImages(this.IMAGES_CLOUDS);

    this.x = Math.random() * 500;
    this.animate();
  }

  animate() {
    setInterval(() => {
    this.moveRight();
       
    this.playAnimation(this.IMAGES_CLOUDS);
    },1000)};
  }






