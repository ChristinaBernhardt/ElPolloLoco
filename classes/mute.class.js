class Mute extends DrawableObject {
    IMAGES = [
      "assets/mute.png",
    ];
  
 
    constructor() {
      super();
      this.loadImage(this.IMAGES);
      this.x = 350;
      this.y = 30;
      this.width = 30;
      this.height = 30;

    }
  

  }
  