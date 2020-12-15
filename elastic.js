class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.pointB = pointB;
        this.elastic = Matter.Constraint.create(options);
        World.add(world, this.elastic);
    }

    display(){
        if(this.elastic.bodyA){
        var pointA = this.elastic.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.elastic.bodyA = null;
    }
}