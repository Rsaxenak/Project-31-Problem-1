class Plinko 
{
    constructor(x, y) 
    {
        var options = 
        {
            isStatic : true
        }
        this.body = Bodies.circle(x, y , 20, options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display() 
    {
        push();

        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

        pop();
    }

}