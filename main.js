// 캔버스 세팅
let canvas;
let ctx; // 이미지 그리는 거 도와주는

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, enemyImage, gameoverImage, bulletImage;

// 우주선 좌표
let spaceshipX = canvas.width / 2 - 32;
let spaceshipY = canvas.height - 60;

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "images/background.jpg";

  spaceshipImage = new Image();
  spaceshipImage.src = "images/spaceship.png";

  bulletImage = new Image(); // 오타 수정: bulletImgae -> bulletImage
  bulletImage.src = "images/bullet.png";

  enemyImage = new Image();
  enemyImage.src = "images/enemy.png";

  gameoverImage = new Image();
  gameoverImage.src = "images/gameover.png";
}

let keysDown = {};
function setupKeyboardListener() {
  document.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  });

  document.addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  });
}

function update() {
  if (39 in keysDown) {
    spaceshipX += 2; // 우주선의 속도
  } // right
  if (37 in keysDown) {
    spaceshipX -= 2;
  } // left

  // 우주선의 좌표값이 무한대로가 아닌 경기장 안에서만 잇게 하려면

  if (spaceshipX <= 0) {
    spaceshipX = 0;
  }

  if (spaceshipX >= canvas.width - 60) {
    spaceshipX = canvas.width - 60; // 캔버스로 고정
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
}

function main() {
  update(); // 좌표값을 업데이트하고
  render(); // 그려주고
  requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
main();
