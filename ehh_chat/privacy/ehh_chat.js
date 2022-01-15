var _title = '대충채팅 개인정보처리방침';
var _text = '대충채팅은 어떠한 개인정보도 수집하지 않습니다.';
var _use_internet = '채팅을 위해 인터넷을 사용합니다.';

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textAlign(CENTER, CENTER);
}


function draw() {
  clear();
  print(windowWidth);
  text(_title, width/2, height/2 - 36);
  text(_text, width/2, height/2);
  text(_use_internet, width/2, height/2 + 24);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
