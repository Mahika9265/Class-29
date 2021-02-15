function setup(){
ground1 = new Ground(300,20,70,500);
ground2 = new Ground(300,20,90,800);

box1 = new Box(50,50,85,450);
box2 = new Box(50,50,85,480);
box3 = new Box(50,50,85,420);
box4 = new Box(50,50,115,465);
box5 = new Box(50,50,115,435);
box6 = new Box(50,50,135,450);

box7 = new Box(50,50,115,750);
box8 = new Box(50,50,115,780);
box9 = new Box(50,50,115,720);
box10 = new Box(50,50,140,765);
box11 = new Box(50,50,149,435);
box12 = new Box(50,50,165,750);
}

function draw(){

ground1.display();
ground2.display();

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
}