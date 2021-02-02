class Stone {

    constructor(x, y) {

      var options = {

          'restitution':0.2,
          'friction':1.0,
          'density':1.5

      }
  
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
  
    }
    
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
  
    }
    
  };