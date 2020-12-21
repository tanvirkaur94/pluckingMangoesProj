class Stone{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    } 
}