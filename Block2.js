class Block2{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.2,
            'friction':0.5
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255
        World.add(world, this.body);

      }
      display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos =this.body.position;
        rectMode(CENTER);
        fill("Yellow");
        rect(pos.x, pos.y, this.width, this.height);
        
        pop();
      }
  }