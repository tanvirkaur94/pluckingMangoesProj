class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }

    display(){
        if(this.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }

    fly(){
        this.bodyA = null;
    }
    
    attach(bodyA){
		this.bodyA=bodyA;
	}
}