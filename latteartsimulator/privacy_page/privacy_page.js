var title = '라떼 아트 시뮬레이터';
var content = '라뗴 아트 시뮬레이터는 어떠한 개인정보도 수집하지 않습니다.';

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(CENTER, CENTER);
}

function draw(){
  clear();
  text(title, width/2, height/2 - 36);
  text(content, width/2, height/2);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
