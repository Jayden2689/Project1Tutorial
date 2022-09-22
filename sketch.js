
class Block{

    constructor(x,y,width,height,speedX,speedY,clr){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
       this.clr = clr;
    
    }
   
     display() {        
    fill(random(0),random(225),random(225));
        rect(this.x,this.y,this.width,this.height);
        noFill();
    }

    move() {
        this.x = this.x + this.speedX
        if (this.x > (windowWidth - this.width) || this.x <= 0 ){
            this.speedX = this.speedX*-1;
        }
    }
}

let blocks = [];
let numBlocks = 800;
keyValue = 0;
//let Block1 = new Block(50,50,30,30,1,1,);

for (i = 0 ; i < numBlocks; i++){
    blocks[i] = new Block(i*5,i*10,40,40,i*1+1,1,)
    
}

function keyPressed() {
    if (keyCode === 65) {
        console.log('key pressed is A')
        keyValue = color(1, 121, 111)
    }

    if (keyCode === 83){
        console.log('key pressed is S')
        keyValue = color(0,0,0); 

    }

    
    if (keyCode === 87){
        console.log('key pressed is W')
        keyValue = color(18, 97, 128); 

    }

    if (keyCode === 68){
        console.log('key pressed is D')
        keyValue = color(153, 255, 255); 

    }

    if (keyCode === 69){
        console.log('key pressed is E')
        keyValue = color( 57, 255, 20); 

    }
    
    
}



function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log(blocks)

    

}
    
   




  function draw() {
    background(keyValue);
    console.log(blocks);
    for(i = 0; i < numBlocks; i++){
        blocks[i].display()
        blocks[i].move();
        noFill();
    }
   
    if (keyIsDown(65)) {
        console.log(mouseX);
        let b = new Block(mouseX. mouseY, mouseX, 20, 1, 1, 100);
        blocks.push(b);
    }
      
      }

    
    

    
 
    
    
   
