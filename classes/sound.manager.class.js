class SoundManager {
    constructor() {
      this.sounds = {};
      this.muted = false; // Starte nicht stummgeschaltet
    }
  
    loadSound(name, url) {
      const audio = new Audio();
      audio.src = url;
      this.sounds[name] = audio;
    }
  
    playSound(name) {
      if (!this.muted) {
        const sound = this.sounds[name];
        if (sound) {
          sound.play();
        }
      }
    }
  
    toggleMute() {
      this.muted = !this.muted;
      // Schalte alle Sounds stumm oder wieder ein
      Object.values(this.sounds).forEach(sound => {
        if (this.muted) {
          sound.pause();
        } else {
          sound.play();
        }
      });
    }
  }
  
  // Beispiel für die Verwendung des Sound-Managers
  const soundManager = new SoundManager();
  soundManager.loadSound("backgroundMusic", "assets/music/background.mp3");
  soundManager.loadSound("explosion", "assets/sounds/explosion.wav");
  
  // Spiel Hintergrundmusik ab
  soundManager.playSound("backgroundMusic");
  
  // Schalte Stummschaltung um
  soundManager.toggleMute();
  
  // Spiel Explosionseffekt ab (wird stummgeschaltet sein, wenn zuvor umgeschaltet wurde)
  soundManager.playSound("explosion");
  
  // Schalte Stummschaltung wieder aus
  soundManager.toggleMute();
  
  // Spiel Explosionseffekt erneut ab (nicht mehr stummgeschaltet)
  soundManager.playSound("explosion");