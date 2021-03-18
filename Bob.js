class Bob {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:0,
          density:0.5
      }
    this.x = x;
    this.y = y;
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("rgb(106,3,119)");
      ellipse(0, 0, 30,30 );
      pop();
  }
}
