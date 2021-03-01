class Paper{

    constructor(x,y,r){

        var options={

            'isStatic':false,
            'restituion':0.3,
            'friction':0,
            'density':1.0

        }

        this.x=x;
        this.y=y;
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,(this.r-20)/2,options);
        
        
        

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();



    }
}