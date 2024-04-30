class layer 
// extends MovableObject
{
    x = 0;
    y = 330;
    height = 150;
    width = 780;
    img;

    constructor(imageName){
        this.loadImage(imageName);
     }


    // loadImage('img/test.png')
    loadImage(path){
        this.img = new Image(); //Abkürzung 
        this.img.src = path;
    }


}