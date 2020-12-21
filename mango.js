class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    } 
}