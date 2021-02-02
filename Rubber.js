class Rubber {

    constructor(x, y) {

      var options = {

          'restitution':0.3,
          'friction':5.0,
          'density':1.0

      }
      
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;

      World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        
        fill("blue");
        ellipse(0, 0, this.radius);
        pop();

    }

}