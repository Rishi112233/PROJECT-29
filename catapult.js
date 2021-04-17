
class catapult
{
     constructor(bodyA,pointB)
    {
         var options = {
              bodyA    : bodyA,
              pointB   : pointB,
              stiffness:0.4,
              length   :10,
         }
         this.pointB=pointB;
         this.catapult=Constraint.create(options);
         World.add(world,this.catapult);         
        }   
                 fly(){
                this.catapult.bodyA = null;
        }
          display(){
           if(this.catapult.bodyA){
               var pointA = this.catapult.bodyA.position;
               var pointB = this.pointB;
               strokeWeight(4);
               stroke(143,44,0);
               line(pointA.x,pointA.y,pointB.x,pointB.y);
           }
       }
}     
