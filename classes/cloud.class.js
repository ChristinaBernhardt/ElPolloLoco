class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 400;
 
    constructor(){
        super().loadImage('assets/5_background/layers/4_clouds/1.png');
            this.x = Math.random() * 500;
            this.animate();
      
           
     }

     animate(){
        setInterval(() => {
        this.x -= 0.15; // Verringere den Wert von x um 1
  
        // Überprüfe, ob x den gewünschten Wert erreicht hat
        if (this.x <= 0) {
          clearInterval(this.interval); // Stoppe den Interval, wenn x den Wert erreicht
              }
      }, 1000 / 60
    ); // Führe die Funktion alle 1000 Millisekunden (1 Sekunde) aus
    }
 

}