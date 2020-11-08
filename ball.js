class Ball
{
    constructor(x,y)
    {
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }



        this.body = Bodies.circle(x,y,30,option)
        this.image = loadImage('paper.png')
        World.add(world,this.body)
 
    }

   display()
   {
       var pos = this.body.position

       fill('black')
       imageMode(CENTER)
       image(this.image,pos.x,pos.y,50,50)

   } 

}


