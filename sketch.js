const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var  slingshot;






function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1= new Box(800, 350, 50,50);
    box2= new Box(800, 330, 50,50);
    box3= new Box(800, 310, 50,50);
    box4= new Box(800, 290, 50,50);
    box5= new Box(800, 270, 50,50);
    box6= new Box(800, 250, 50,50);
    
    
    box7= new Box(1000, 350, 50,50);
    box8= new Box(1000, 330, 50,50);
    box9= new Box(1000, 310, 50,50);
    box10= new Box(1000, 290, 50,50);
    box11= new Box(1000, 270, 50,50);
    box12= new Box(1000, 250, 50,50);

    
    box13= new Box(900, 350, 50,50);
    box14= new Box(900, 330, 50,50);
    box15= new Box(900, 310, 50,50);
    box16= new Box(900, 290, 50,50);
    box17= new Box(900, 270, 50,50);
    box18= new Box(900, 250, 50,50);
    box19= new Box(900, 270, 50,50);
    box20= new Box(900, 250, 50,50);

    ball= new Ball(500, 230, 80, 80)

    

    slingshot = new SlingShot(ball.body,{x:500, y:230});
}

function draw(){
    background ("white");
    Engine.update(engine);

    fill ("lightgreen")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    fill ("red")
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill ("blue")
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
   

    ball.display();

    slingshot.display();

    ground.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}



