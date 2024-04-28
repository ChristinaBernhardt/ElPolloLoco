class MovableObject {
    x;
    y;
    img;

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