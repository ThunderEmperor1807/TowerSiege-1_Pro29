class platform{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }

        this.platform=Bodies.rectangle(x,y,w,h,options)
        this.width=w
        this.height=h

        World.add(world,this.platform)
    }

    display(){
        var pos=this.platform.position

        push()
        fill(255)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}