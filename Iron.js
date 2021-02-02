class Iron {

    constructor(x, y) {

      var options = {

          'restitution':0.2,
          'friction':1.0,
          'density':1.5

      }
  
      this.body = Bodies.rectangle(x, y, 70, 50, options);
      this.width = 70;
      this.height = 50;
      
      World.add(world, this.body);
  
    }
    
    display(){
  
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
  
    }
    
  };