// circle 1 
circle1Y = 100; 
speed = 5 ;
circleR= 50; 
clr1 = 1

// circle 2 
circle2X = 400;
circle2R = 50;
speed2 = 5; 


function setup() {

    createCanvas(windowWidth, windowHeight);
    //speed = windowHeight/60 // cross the screen every second ; 
  }
  
  function draw() {
    background(0);


    fill(225,700,clr1);
    circle(windowWidth/2, circle1Y ,circleR*2);

    console.log(circle1Y);
     circle1Y= circle1Y + speed; 




     
    // if statement 

    // if circleY is greater 
    // than to windowHeight 
    // circleY = windowHeight

    //if circleY = windowHeight-circleR or ||
    //circleY = 0 + circleR then multiple 
    //speed by -1

    fill(225,0,500)
    circle(circle2X, windowHeight/2 ,circle2R*2);
    circle2X = circle2X + speed2; 





    if (circle1Y > (windowHeight-circleR) || circle1Y < (0 + circleR)) {
       // circleY = (windowHeight-circleR);
       speed = speed*-1
    }

    
    if (circle2X > (windowWidth-circle2R) || circle2X < (0 + circle2R)) {
        // circle2X = (windowHeight-circle2R);
        speed2 = speed2*-1
     }


    
  }








