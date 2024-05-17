class Endboss extends MovableObject {
        y = 80;
        height = 370;
        width = 350;
   
      
      
        IMAGES_WALKING = [
          "assets/4_enemie_boss_chicken/1_walk/G1.png",
          "assets/4_enemie_boss_chicken/1_walk/G2.png",
          "assets/4_enemie_boss_chicken/1_walk/G3.png",
          "assets/4_enemie_boss_chicken/1_walk/G4.png"
        ];

        IMAGES_ALERT = [
          "assets/4_enemie_boss_chicken/2_alert/G5.png",
          "assets/4_enemie_boss_chicken/2_alert/G6.png",
          "assets/4_enemie_boss_chicken/2_alert/G7.png",
          "assets/4_enemie_boss_chicken/2_alert/G8.png",
          "assets/4_enemie_boss_chicken/2_alert/G9.png",
          "assets/4_enemie_boss_chicken/2_alert/G10.png",
          "assets/4_enemie_boss_chicken/2_alert/G11.png",
          "assets/4_enemie_boss_chicken/2_alert/G12.png"
        ];

        IMAGES_ATTACK = [
          "assets/4_enemie_boss_chicken/3_attack/G13.png",
          "assets/4_enemie_boss_chicken/3_attack/G14.png",
          "assets/4_enemie_boss_chicken/3_attack/G15.png",
          "assets/4_enemie_boss_chicken/3_attack/G16.png",
          "assets/4_enemie_boss_chicken/3_attack/G17.png",
          "assets/4_enemie_boss_chicken/3_attack/G18.png",
          "assets/4_enemie_boss_chicken/3_attack/G19.png",
          "assets/4_enemie_boss_chicken/3_attack/G20.png"

        ];        
        
        IMAGES_HURT = [
          "assets/4_enemie_boss_chicken/4_hurt/G21.png",
          "assets/4_enemie_boss_chicken/4_hurt/G22.png",
          "assets/4_enemie_boss_chicken/4_hurt/G23.png"
        ];        
        
        IMAGES_DEAD = [
          "assets/4_enemie_boss_chicken/5_dead/G24.png",
          "assets/4_enemie_boss_chicken/5_dead/G25.png",
          "assets/4_enemie_boss_chicken/5_dead/G26.png"
        ];
        
      
      
        constructor() {
          super().loadImage("assets/4_enemie_boss_chicken/2_alert/G5.png");
          this.loadImages(this.IMAGES_WALKING);
          this.loadImages(this.IMAGES_ALERT);
          this.loadImages(this.IMAGES_ATTACK);
          this.loadImages(this.IMAGES_HURT);
          this.loadImages(this.IMAGES_DEAD);
          this.x = 3400;
        //   this.speed = 0.15 + Math.random() * 0.5;
          this.animate();
            
                 
      }
      
      animate(){
         setInterval(() => {
            this.playAnimation(this.IMAGES_ALERT);},500);
        //   this.moveLeft();
      }
      
      
      }
      