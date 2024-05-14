class Salsabottleground extends MovableObject {
    height = 100;
    width = 50;
  
IMAGES_SALSABOTTLEONGROUND = [
      "assets/6_salsa_bottle/1_salsa_bottle_on_ground.png",
      "assets/6_salsa_bottle/2_salsa_bottle_on_ground.png"
    ];
    
    constructor() {
      super().loadImage("assets/6_salsa_bottle/1_salsa_bottle_on_ground.png");
      this.loadImages(this.IMAGES_SALSABOTTLEONGROUND);
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