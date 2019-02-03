var paksuus = 2
function setup() {
  createCanvas(840, 600);
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
