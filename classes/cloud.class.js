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

  currentImageIndex = 0;

  constructor() {
    super().loadImage(this.IMAGES_CLOUDS[0]);
    this.loadImages(this.IMAGES_CLOUDS);

    this.x = Math.random() * 500;
    this.animate();
  }

  animate() {
    this.moveLeft();
    // Wenn alle Bilder geladen sind, können wir zu einem zufälligen Bild wechseln
    if (this.imagesLoaded) {
      const randomIndex = Math.floor(Math.random() * this.IMAGES_CLOUDS.length);
      this.setImage(this.IMAGES_CLOUDS[randomIndex]);
    }
  }
}