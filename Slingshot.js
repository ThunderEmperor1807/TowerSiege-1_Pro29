class slingshot{
    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:5,
            stiffness:0.1
        }

        this.sling=Constraint.create(options)
        this.pointB = pointB

        World.add(world,this.sling)

    }

    fly(){
        this.sling.bodyA=null
    }


    
    display(){

        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push()
        strokeWeight(5);
        stroke(255)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        }
    }
}


    
