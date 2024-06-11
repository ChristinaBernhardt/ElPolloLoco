class Mute extends DrawableObject {
    IMAGES = [
      "assets/mute.png",
    ];
  
 
    constructor() {
      super();
      this.loadImages(this.IMAGES);
      this.x = 50;
      this.y = 300;
      this.width = 200;
      this.height = 40;

    }
  

  }
  