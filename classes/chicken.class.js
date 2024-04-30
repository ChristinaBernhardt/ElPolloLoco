class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 50;

  constructor() {
    super().loadImage("assets/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

    this.x = 200 + Math.random() * 500;
    this.animate();
      
           
}

animate(){
   setInterval(() => {
   this.x -= 0.30; // Verringere den Wert von x um 1

   // Überprüfe, ob x den gewünschten Wert erreicht hat
   if (this.x <= 0) {
     clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
         }
 }, 1000 / 60
); // Führe die Funktion alle 1000 Millisekunden (1 Sekunde) aus
}


}
