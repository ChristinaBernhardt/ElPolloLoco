class Endboss extends MovableObject {
  y = 80;
  height = 370;
  width = 350;
  speed = 0.5;
  hadFirstContact = false;

  offset = {
    top: 70,
    bottom: 0,
    left: 70,
    right: 70,
  };

  IMAGES_WALKING = [
    "assets/4_enemie_boss_chicken/1_walk/G1.png",
    "assets/4_enemie_boss_chicken/1_walk/G2.png",
    "assets/4_enemie_boss_chicken/1_walk/G3.png",
    "assets/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ALERT = [
    "assets/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "assets/4_enemie_boss_chicken/3_attack/G13.png",
    "assets/4_enemie_boss_chicken/3_attack/G14.png",
    "assets/4_enemie_boss_chicken/3_attack/G15.png",
    "assets/4_enemie_boss_chicken/3_attack/G16.png",
    "assets/4_enemie_boss_chicken/3_attack/G17.png",
    "assets/4_enemie_boss_chicken/3_attack/G18.png",
    "assets/4_enemie_boss_chicken/3_attack/G19.png",
    "assets/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "assets/4_enemie_boss_chicken/4_hurt/G21.png",
    "assets/4_enemie_boss_chicken/4_hurt/G22.png",
    "assets/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "assets/4_enemie_boss_chicken/5_dead/G24.png",
    "assets/4_enemie_boss_chicken/5_dead/G25.png",
    "assets/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  alert_sound = new Audio("audio/alert.mp3");
  attack_sound = new Audio("audio/attack.mp3");
  won_sound = new Audio("audio/won2.mp3");

  constructor() {
    super().loadImage("assets/4_enemie_boss_chicken/2_alert/G5.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.x = 4000;
    //   this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    let i = 0;
    setInterval(() => {
      if (!this.dead) {
        if (i < 10) {
          this.playAnimation(this.IMAGES_ALERT);
        } else {
          this.playAnimation(this.IMAGES_ATTACK);
        }

        i++;
        if (world.character.x > 3470 && !this.hadFirstContact) {
          if (isSoundOn) {this.alert_sound.play()};
          i = 0;
          this.hadFirstContact = true;
        }

        if (world.character.x > 3470 && this.hadFirstContact) {
          if (isSoundOn) { this.attack_sound.play()};
          this.moveLeft();
        }
      }
    }, 150);

    setInterval(() => {
      if (this.energy === 0) {
        if (!this.dead) {
          this.currentImage = 0;
          this.dead = true;
          setTimeout(() => {
            wonGame();
                    let gameOverDiv = document.getElementById("game-won");
            if (isSoundOn) {this.won_sound.play()};
            gameOverDiv.style.display = "block";
            setTimeout(() => {
              window.location.href = "index.html";
            }, 2000);
          }, 2000);
        }
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        if (isSoundOn) {this.scream_sound.play()};
        this.playAnimation(this.IMAGES_HURT);
      }
    }, 150);
  }
}
