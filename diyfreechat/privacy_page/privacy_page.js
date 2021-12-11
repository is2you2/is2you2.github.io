var _text = 'DIYFreeChat(자유채팅)은 어떠한 개인정보도 수집하지 않습니다.';

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(CENTER, CENTER);
}


function draw() {
  clear();
  print(windowWidth);
  text(_text, width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
