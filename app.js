let xPosition = 300;
let xChange = 1;
let circleColor;
let y;
let colorOne = -1;
let colorTwo = -1;
let colorThree = -1;
let y2;
let y3;
let y4;
let yValue = 300;
let yChange = -1;

function setup(){
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');
    circleColor = random(0, 255);
}

function draw() {
background(55);

let xOffset = 5; 
const yOffset = 5;


noFill();

if(colorOne > 0 || colorTwo > 0 || colorThree > 0){

    colorOne = colorTwo;
    colorTwo = colorThree;
    colorThree = colorOne;

}



if(colorOne < 0 || colorTwo < 0 || colorThree < 0)
{
colorOne = random(5,255);
colorTwo = random(5,255);
colorThree = random(5,255);
}








stroke(colorOne, colorTwo, colorThree);
strokeWeight(10);
rect(25, 100, 30, 30);
rect(90, 100, 30, 30);
rect(155, 100, 30, 30);
rect(220, 100, 30, 30);
rect(285, 100, 30, 30);
rect(350, 100, 30, 30);
rect(415, 100, 30, 30);
rect(480, 100, 30, 30);
rect(545, 100, 30, 30);

stroke(colorOne, colorTwo, colorThree);
rect(25, 150, 30, 30);
stroke(colorTwo, colorTwo, colorOne);
rect(90, 150, 30, 30);
rect(155, 150, 30, 30);
rect(220, 150, 30, 30);
rect(285, 150, 30, 30);
rect(350, 150, 30, 30);
rect(415, 150, 30, 30);
rect(480, 150, 30, 30);

stroke(colorOne, colorTwo, colorThree);

rect(545, 150, 30, 30);

stroke(colorOne, colorTwo, colorThree);

rect(25, 200, 30, 30);

stroke(colorTwo, colorTwo, colorOne);

rect(90, 200, 30, 30);
rect(155, 200, 30, 30);
rect(220, 200, 30, 30);
rect(285, 200, 30, 30);
rect(350, 200, 30, 30);
rect(415, 200, 30, 30);
rect(480, 200, 30, 30);

stroke(colorOne, colorTwo, colorThree);

rect(545, 200, 30, 30);


stroke(colorOne, colorTwo, colorThree);
rect(25, 250, 30, 30);
rect(90, 250, 30, 30);
rect(155, 250, 30, 30);
rect(220, 250, 30, 30);
rect(285, 250, 30, 30);
rect(350, 250, 30, 30);
rect(415, 250, 30, 30);
rect(480, 250, 30, 30);
rect(545, 250, 30, 30);



stroke(colorOne, 100, 100);

//fill(255, 0, 0, .1);
//stroke(0);
//stroke
//ellipse(width/2, height/2, 50);





noStroke();



fill(circleColor+50, circleColor-100, circleColor+100);
ellipse(xPosition, y, 30);

ellipse(xPosition, y2, 30);

ellipse(xPosition, y3, 30);

ellipse(xPosition, y4, 30);

ellipse(xPosition, yValue, 30);

ellipse(10, yValue, 30);
ellipse(50, yValue, 30);
ellipse(90, yValue, 30);
ellipse(130, yValue, 30);
ellipse(170, yValue, 30);
ellipse(210, yValue, 30);
ellipse(250, yValue, 30);
ellipse(290, yValue, 30);
ellipse(330, yValue, 30);
ellipse(370, yValue, 30);
ellipse(410, yValue, 30);
ellipse(450, yValue, 30);
ellipse(490, yValue, 30);
ellipse(530, yValue, 30);
ellipse(570, yValue, 30);
ellipse(610, yValue, 30);




xPosition = xPosition + xChange;

if (xPosition > width || xPosition < 0){

xChange = xChange * -1;

circleColor = circleColor + 100;

}


yValue = yValue + yChange;
if (yValue > height || yValue < 0)
{

   yChange = yChange*-1
   
   circleColor = circleColor + 100;


}




if (circleColor > 390)

{

    circleColor = 0;
 
}

y = random(320,330);

y2 = random(20,30);

y3 = random(60,70);

y4 = random(370,380);




console.log("Hello World!");
console.log(xPosition);


}