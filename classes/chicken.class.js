class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 50;


  IMAGES_WALKING = [
    "assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];


  constructor() {
    super().loadImage("assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
      
           
}

animate(){
   setInterval(() => {
    this.playAnimation(this.IMAGES_WALKING);
  },100);
    this.moveLeft();
}


}
