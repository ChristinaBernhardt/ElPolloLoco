class Endboss extends MovableObject {
        y = 80;
        height = 370;
        width = 350;
   
      
      
        IMAGES_WALKING = [
          "assets/4_enemie_boss_chicken/2_alert/G5.png",
          "assets/4_enemie_boss_chicken/2_alert/G6.png",
          "assets/4_enemie_boss_chicken/2_alert/G7.png",
          "assets/4_enemie_boss_chicken/2_alert/G8.png",
          "assets/4_enemie_boss_chicken/2_alert/G9.png",
          "assets/4_enemie_boss_chicken/2_alert/G10.png",
          "assets/4_enemie_boss_chicken/2_alert/G11.png",
          "assets/4_enemie_boss_chicken/2_alert/G12.png",
        ];

        
      
      
        constructor() {
          super().loadImage("assets/4_enemie_boss_chicken/2_alert/G5.png");
          this.loadImages(this.IMAGES_WALKING);
          this.x = 3400;
        //   this.speed = 0.15 + Math.random() * 0.5;
          this.animate();
            
                 
      }
      
      animate(){
         setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);},500);
        //   this.moveLeft();
      }
      
      
      }
      