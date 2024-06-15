class Character extends MovableObject {
  x = 200;
  y = 230;
  speed = 10;
  bottles = 0;
  coins = 0;
  offset = {
    top: 120,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_IDLE = [
    "assets/2_character_pepe/1_idle/idle/I-1.png",
    "assets/2_character_pepe/1_idle/idle/I-2.png",
    "assets/2_character_pepe/1_idle/idle/I-3.png",
    "assets/2_character_pepe/1_idle/idle/I-4.png",
    "assets/2_character_pepe/1_idle/idle/I-5.png",
    "assets/2_character_pepe/1_idle/idle/I-6.png",
    "assets/2_character_pepe/1_idle/idle/I-7.png",
    "assets/2_character_pepe/1_idle/idle/I-8.png",
    "assets/2_character_pepe/1_idle/idle/I-9.png",
    "assets/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_LONG_IDLE = [
    "assets/2_character_pepe/1_idle/long_idle/I-11.png",
    "assets/2_character_pepe/1_idle/long_idle/I-12.png",
    "assets/2_character_pepe/1_idle/long_idle/I-13.png",
    "assets/2_character_pepe/1_idle/long_idle/I-14.png",
    "assets/2_character_pepe/1_idle/long_idle/I-15.png",
    "assets/2_character_pepe/1_idle/long_idle/I-16.png",
    "assets/2_character_pepe/1_idle/long_idle/I-17.png",
    "assets/2_character_pepe/1_idle/long_idle/I-18.png",
    "assets/2_character_pepe/1_idle/long_idle/I-19.png",
    "assets/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "assets/2_character_pepe/2_walk/W-21.png",
    "assets/2_character_pepe/2_walk/W-22.png",
    "assets/2_character_pepe/2_walk/W-23.png",
    "assets/2_character_pepe/2_walk/W-24.png",
    "assets/2_character_pepe/2_walk/W-25.png",
    "assets/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "assets/2_character_pepe/3_jump/J-31.png",
    "assets/2_character_pepe/3_jump/J-32.png",
    "assets/2_character_pepe/3_jump/J-33.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-34.png",
    "assets/2_character_pepe/3_jump/J-35.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-36.png",
    "assets/2_character_pepe/3_jump/J-37.png",
    "assets/2_character_pepe/3_jump/J-38.png",
    "assets/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURT = [
    "assets/2_character_pepe/4_hurt/H-41.png",
    "assets/2_character_pepe/4_hurt/H-42.png",
    "assets/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "assets/2_character_pepe/5_dead/D-51.png",
    "assets/2_character_pepe/5_dead/D-51.png",
    "assets/2_character_pepe/5_dead/D-51.png",
    "assets/2_character_pepe/5_dead/D-51.png",
    "assets/2_character_pepe/5_dead/D-52.png",
    "assets/2_character_pepe/5_dead/D-52.png",
    "assets/2_character_pepe/5_dead/D-52.png",
    "assets/2_character_pepe/5_dead/D-52.png",
    "assets/2_character_pepe/5_dead/D-53.png",
    "assets/2_character_pepe/5_dead/D-53.png",
    "assets/2_character_pepe/5_dead/D-53.png",
    "assets/2_character_pepe/5_dead/D-53.png",
    "assets/2_character_pepe/5_dead/D-54.png",
    "assets/2_character_pepe/5_dead/D-54.png",
    "assets/2_character_pepe/5_dead/D-54.png",
    "assets/2_character_pepe/5_dead/D-54.png",
    "assets/2_character_pepe/5_dead/D-55.png",
    "assets/2_character_pepe/5_dead/D-55.png",
    "assets/2_character_pepe/5_dead/D-55.png",
    "assets/2_character_pepe/5_dead/D-55.png",
    "assets/2_character_pepe/5_dead/D-56.png",
    "assets/2_character_pepe/5_dead/D-56.png",
    "assets/2_character_pepe/5_dead/D-56.png",
    "assets/2_character_pepe/5_dead/D-56.png",
    "assets/2_character_pepe/5_dead/D-57.png",
    "assets/2_character_pepe/5_dead/D-57.png",
    "assets/2_character_pepe/5_dead/D-57.png",
    "assets/2_character_pepe/5_dead/D-57.png",
  ];

  world;
  walking_sound = new Audio("audio/walk.mp3");
  jumping_sound = new Audio("audio/jump.mp3");
  scream_sound = new Audio("audio/hurt.mp3");
  loose_sound = new Audio("audio/loose.mp3");
  sleeping_sound = new Audio("audio/sleeping.mp3");


/**
 * Constructs a new Character instance and initializes it with default properties and behaviors.
 * 
 * - Loads the initial character image.
 * - Loads various character animations (idle, long idle, walking, jumping, hurt, dead).
 * - Applies gravity to the character.
 * - Starts the character animation.
 * 
 * @constructor
 * @memberof Character
 */
  constructor() {
    super().loadImage("assets/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONG_IDLE);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.applyGravity();
    this.animate();
  }


/**
 * Starts the character animation by initializing necessary intervals.
 * 
 * - Starts the interval for handling character movements and actions.
 * - Starts the interval for handling images.
 * 
 * @memberof Character
 */
  animate() {
    this.startIntervalCharacterDeadSleepingMoveJump();
    this.startIntervalCharacterImages();
  }


/**
 * Initializes an interval to handle character movements and actions based on keyboard inputs.
 * The interval runs at 60 frames per second (1000ms / 60).
 * 
 * - Pauses walking sound if the character is not dead.
 * - Throws an object if the 'D' key is pressed.
 * - Moves the character to the right if the 'RIGHT' key is pressed and the character hasn't reached the level's end.
 * - Moves the character to the left if the 'LEFT' key is pressed and the character's position is greater than -615.
 * - Makes the character jump if the 'SPACE' key is pressed and the character is on the ground.
 * - Adjusts the camera position based on the character's position.
 * - Pauses sleeping sound and plays walking sound based on the character's state and actions.
 * 
 * @memberof Character
 */
  startIntervalCharacterDeadSleepingMoveJump() {
    setInterval(() => {
      if (!this.dead) {
        this.walking_sound.pause();
        if (this.world.keyboard.D) {
          this.throw;
        }
        if (
          this.world.keyboard.RIGHT &&
          this.x < this.world.level.level_end_x
        ) {
          this.sleeping_sound.pause();
          this.moveRight();
          if (isSoundOn) {
            this.walking_sound.play();
          }
        }
        if (this.world.keyboard.LEFT && this.x > -615) {
          this.moveCharacterLeft();
        }
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
          this.sleeping_sound.pause();
          this.jump();
        }
        this.world.camera_x = -this.x + 100;
      }
    }, 1000 / 60);
  }


/**
 * Initializes an interval to update the character's animation based on its current state.
 * The interval runs every 150 milliseconds.
 * 
 * - Plays a specific animation based on the character's energy, state (hurt, jumping, walking, idle), and keyboard input.
 * - Plays appropriate sounds when the character is hurt or sleeping, if sound is enabled.
 * 
 * @memberof Character
 */
  startIntervalCharacterImages() {
    setInterval(() => {
      if (this.energy === 0) {
        this.characterIsDieGameOver();
      } else if (this.isHurt()) {
        if (isSoundOn) {
          this.scream_sound.play();
        }
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.updateMoveTime();
        this.playAnimationOnce(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.updateMoveTime();
          this.playAnimation(this.IMAGES_WALKING);
        } else if (this.sleepTime()) {
          this.playAnimation(this.IMAGES_LONG_IDLE);
          if (isSoundOn) {
            setTimeout(() => {
            this.sleeping_sound.play();
          }, 2000);
          }
        } else {
          this.playAnimation(this.IMAGES_IDLE);
        }
      }
    }, 100);
  }


/**
 * Handles the character's death and triggers the game over sequence.
 * 
 * - Marks the character as dead.
 * - Stops the game after a 2-second delay.
 * - Displays the game over screen.
 * - Plays the losing sound if sound is enabled.
 * - Redirects to the index page after an additional 2-second delay.
 * - Plays the death animation once.
 * 
 * @memberof Character
 */
  characterIsDieGameOver() {
    if (!this.dead) {
      this.currentImage = 0;
      this.dead = true;
      setTimeout(() => {
        stopGame();
        let gameOverDiv = document.getElementById("game-over");
        gameOverDiv.style.display = "block";
        if (isSoundOn) {
          this.loose_sound.play();
        }
        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }, 2000);
    }
    this.playAnimationOnce(this.IMAGES_DEAD);
  }


/**
 * Moves the character to the left and updates the character's state and sounds.
 * 
 * - Pauses the sleeping sound.
 * - Moves the character to the left.
 * - Sets the character's direction to face left.
 * - Plays the walking sound if sound is enabled.
 * 
 * @memberof Character
 */
  moveCharacterLeft() {
    this.sleeping_sound.pause();
    this.moveLeft();
    this.otherDirection = true;
    if (isSoundOn) {
      this.walking_sound.play();
    }
  }


/**
 * Makes the character jump by setting its vertical speed and updating its state.
 * 
 * - Plays the jumping sound if sound is enabled.
 * - Sets the character's vertical speed to initiate the jump.
 * - Resets the current image index to 0.
 * 
 * @memberof Character
 */
  jump() {
    if (isSoundOn) {
      this.jumping_sound.play();
    }
    this.speedY = 30;
    this.currentImage = 0;
  }


  /**
   * add bottles when colliding
   *
   * @param {*} salsa
   */
  addBottle(salsa) {
    this.bottles += 10;
  }


  /**
   * add coins when colliding
   *
   * @param {*} coin
   */
  addCoin(coin) {
    this.coins += 5;
  }


/**
 * Checks if the character has been idle for more than 4 seconds.
 * 
 * - Calculates the time passed since the last movement.
 * - Returns `true` if the passed time is greater than 4000 milliseconds (4 seconds), otherwise `false`.
 * 
 * @returns {boolean} - `true` if the character has been idle for more than 4 seconds, otherwise `false`.
 * 
 * @memberof Character
 */
  sleepTime() {
    let passedTime = new Date().getTime() - this.lastMoveTime;
    return passedTime > 6000;
  }
}
