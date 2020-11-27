class Circle{
    constructor(x,y,radius){
        var circle_options = {
            restitution: 1
        }

        this.radius = radius

        this.body = Bodies.circle(x,y,radius, circle_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill(255);
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}