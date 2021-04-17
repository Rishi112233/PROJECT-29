const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() 
{
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  box1= new blueBox(500,360,20,30); 
  box2= new yellowBox(520,360,20,30);
  box3= new greenBox(540,360,20,30);
  box4= new redBox(560,360,20,30);
  box5= new greenBox(580,360,20,30);
  box6= new yellowBox(600,360,20,30);

  box7 = new redBox(510,330,20,30);
  box8 = new yellowBox(530,330,20,30);
  box9 = new blueBox(550,330,20,30);
  box10= new greenBox(570,330,20,30);
  box11= new redBox(590,330,20,30);
 
  box12= new yellowBox(520,310,20,30);
  box13= new blueBox(540,310,20,30);
  box14= new redBox(560,310,20,30);
  box15= new greenBox(580,310,20,30);

  box16= new yellowBox(530,280,20,30);
  box17= new redBox(550,280,20,30);
  box18= new greenBox(570,280,20,30);
  
  box19= new blueBox(540,250,20,30); 
  box20= new redBox(560,250,20,30);

  box21= new greenBox(550,220,20,30);
  box22= new greenBox(500,135,20,30);
  box23= new blueBox(520,135,20,30);
  box24= new yellowBox(540,135,20,30);
  box25= new redBox(560,135,20,30);
  box26= new greenBox(580,135,20,30);
  box27= new yellowBox(600,135,20,30);

  box28= new blueBox(510,105,20,30);
  box29= new redBox(530,105,20,30);
  box30= new yellowBox(550,105,20,30);
  box31= new greenBox(570,105,20,30);
  box32= new redBox(590,105,20,30);

  box33= new yellowBox(520,75,20,30); 
  box34= new blueBox(540,75,20,30); 
  box35= new redBox(560,75,20,30); 
  box36= new greenBox(580,75,20,30);

  box37= new yellowBox(530,45,20,30);
  box38= new blueBox(550,45,20,30);
  box39= new greenBox(570,45,20,30);

  ball= new Ball(0,0,50);

  rope=new catapult(ball.body,{x:100,y:100});

  ground = new platform(400,390,12000,20);

  hover = new platform(550,160,200,20);
}

function draw() {
  Engine.update(engine);
  background(232,255,255);  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box28.display();
  box29.display();

  ball.display();
  ground.display();
  hover.display();
  rope.display();
 drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  rope.fly();
}