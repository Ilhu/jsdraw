var paksuus = 2
var sentence = "left arrow = clear, up and down arrow = thickness."
function setup() {
  createCanvas(840, 600);
  textSize(32);
  text(sentence, 10, 30);
}

function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, paksuus, paksuus);
    fill(0);
  }
  text(sentence, 10, 30);
}


function keyPressed() {
    if(keyCode == UP_ARROW) {
        paksuus += 1;
    } else if (keyCode == DOWN_ARROW) {
        paksuus -= 1;
    } else if (keyCode == LEFT_ARROW) {
      ellipse(320, 240, 2000, 2000)
      fill(255);
    }
    return 0;
}
