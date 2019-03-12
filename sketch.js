var bDireito = 180;
var bEsquerdo = 0;
var auxi1 = 0
var auxi2 = 0
function setup() {
  createCanvas(400, 400);
  x = 100
  y = x
  bQuad = 120
  hQuad = bQuad

}

function draw() {
  background(220);
  //cabeça inicio
  push();
  translate(width / 2, (height / 3) - 23)
  rotate(radians(180))
  rect(-30, 0, 55, 60)
  pop()
  //cabeça fim

  ///tronco inicio
  push();
  translate(width / 2, (height / 3) - 20)
  rect(-60, 0, hQuad, bQuad)
  pop();
  //tronco fim

  //braço direito inicio
  push();

  translate(width / 3, height / 3);
  rotate(radians(bDireito))
  rect(0, -14, x, y / 3);
  pop();
  // braço direito fim

  //braço esquerdo inicio
  push();
  translate((width / 2) + width / 6, height / 3);
  rotate(radians(bEsquerdo))
  rect(0, -20, x, y / 3);
  pop();
  // braço esquerdo fim

  //perna esquerda inicio
  push();
  translate((width / 2) - 43, (height / 2) + x / 2.5);
  rotate(radians(0))
  rect(-16.66, 0, x / 3, y);
  pop();
  // perna direita fim

  //perna esquerda inicio
  push();
  translate((width / 2) + 43, (height / 2) + x / 2.5);
  rotate(radians(0))
  rect(-16.66, 0, x / 3, y);
  pop();
  // perna direita fim
  
}

function keyTyped() {

  if (key == 'd' || key == 'D') {
    if (auxi1 % 2 == 0) {
      bDireito = 200;
      auxi1 = 0
    } else {
      bDireito = 180;
    }
    auxi1++;
  } else if (key == 'e' || key == 'E') {
    if (auxi2 % 2 == 0) {
      bEsquerdo = 30;
      auxi2 = 0
    } else {
      bEsquerdo = 0;
    }
    auxi2++;
  }
}