let content = "EeAa@FfKk$Ff#DdMm"; //variable for text string
let xStart = 0; //starting position of the text wall
let customFont; //variable for custom font
let canvas;
let pos = 100;
let g = 0;

function preload() {
  customFont = loadFont("./fonts/EmperorDisplay-Regular.ttf"); //use  preload to load the custom font
}

function setup() {
    canvas = createCanvas(windowWidth - 15, windowHeight - 200);
    canvas.parent("sketchHolder")
    canvas.position(0, 0, "relative");
    textFont(customFont); //use the custom font for text display
    textSize(600);
    // console.log(windowHeight);
}

function draw() {
  clear();
//   background(0, g);
  for (let x = xStart; x < width; x += 6260) {
    //use a for loop to draw the line of text multiple times down the vertical axis
    fill(255);
    text(content, x, height - 60); //display text
  }
  xStart -= 5; //move the starting point of the loop up to create the scrolling animation, xStart-- is the same as xStart = xStart -1 or xStart-=1
}

function windowResized() {
    resizeCanvas(windowWidth, 5500);
}

function mouseWheel(event) {
  // print(event.delta);

  if (event.delta > 0) {
    if (g <= 0) {
      g = 0;
    }
    g += 7;
  }
  if (event.delta < 0) {
    if (g > 255) {
      g = 255;
    }
    g -= 7;
  }
}

