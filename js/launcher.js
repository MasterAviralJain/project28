class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:10,
        }
       
        World.add(world,this.sling);
    }
    attach(body){
        this.launch.bodyA=body
    }
    fly(){
        this.launch.bodyA=null;
    }


    display(){
        if (this.launch.bodyA){
        var pointA=this.launch.bodyA.position;
        var pointB=this.launch.pointB;
      push ();
        stroke("#301608")
        if (pointA.x<220){
            strokeWeight(7);
        line (pointA.x-25,pointA.y,pointB.x-10,pointB.y);
        line (pointA.x+25,pointA.y,pointB.x+20,pointB.y-3);
        
            }
        else{
            strokeWeight(3);
            line (pointA.x-25,pointA.y,pointB.x-10,pointB.y);
            line (pointA.x+25,pointA.y,pointB.x+20,pointB.y-3);
            
        }}
        
    pop ();
    }
}