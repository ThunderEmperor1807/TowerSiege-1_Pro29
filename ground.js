class ground{

    constructor(){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(600,590,1200,20,options)
          this.width=1200
          this.height=20
          World.add(world,this.ground);

    }
    display(){
        
        push()
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop()
    }
}