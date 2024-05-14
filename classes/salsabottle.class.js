class Salsabottle extends MovableObject {
    height = 100;
    width = 50;
  
  IMAGES_SALSABOTTLE = [
      "assets/6_salsa_bottle/salsa_bottle.png",
    ];
    
    constructor() {
      super().loadImage("assets/6_salsa_bottle/salsa_bottle.png");
      this.loadImages(this.IMAGES_SALSABOTTLE);
      this.x = 200 + Math.random() * 3000;
      this.y = 100 + Math.random() * 200;
      // this.animate();  }
  
  // animate(){
  //   setInterval(() => {
  //     this.playAnimation(this.COINS);
  //   },1000);
  // }
  }
  }