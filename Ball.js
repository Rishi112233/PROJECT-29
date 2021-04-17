
class Ball
{
    constructor(x,y,radius)
    {
        var options={
            'restitution':0.4,
            'friction'   :2.5,
            'density'    :2.4,
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius;
        World.add(world, this.body);
    }
            display()
            {
                var pos = this.body.position;
                fill(73,255,233);
                ellipseMode(CENTER);
                ellipse(pos.x,pos.y,this.radius);
            }
}
