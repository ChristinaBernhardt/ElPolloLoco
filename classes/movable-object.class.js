class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 100;


    // loadImage('img/test.png')
    loadImage(path){
        this.img = new Image(); //Abkürzung 
        this.img.src = path;
    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft(){

        
    }
}