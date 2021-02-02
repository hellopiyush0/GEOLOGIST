class Sand {

    constructor(x, y) {

      var options = {

          'restitution':0.3,
          'friction':5.0,
          'density':1.0

      }
      
      this.body = Bodies.circle(x, y, 7, options);
      this.radius = 7;

      World.add(world, this.body);

    }

    display(){
        
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        
        fill("yellow");
        ellipse(0, 0, this.radius);
        pop();

    }

}