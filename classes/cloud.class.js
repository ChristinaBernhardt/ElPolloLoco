class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 400;
 
    constructor(){
        super().loadImage('assets/5_background/layers/4_clouds/1.png');
            this.x = Math.random() * 500;
      
     }



 

}