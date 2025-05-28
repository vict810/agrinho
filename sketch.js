let campo, cidade;
let dialogo = [
  "Pessoa do Campo: Olá, amigo da cidade!",
  "Pessoa da Cidade: Oi! Tudo bem por aí?",
  "Pessoa do Campo: Sim! Sabia que estamos conectados de várias formas?",
  "Pessoa da Cidade: É mesmo? Como assim?",
  "Pessoa do Campo: Culturalmente, nossa música e festas se misturam.",
  "Pessoa do Campo: Gastronomicamente, vocês consomem o que produzimos.",
  "Pessoa do Campo: E economicamente, vendemos e compramos um do outro.",
  "Pessoa da Cidade: Uau, é verdade! Estamos mais ligados do que parece.",
];
let falaIndex = 0;
let timer = 0;

function setup() {
  createCanvas(800, 400);
  campo = new Pessoa(200, 250, color(34, 139, 34)); // verde - campo
  cidade = new Pessoa(600, 250, color(70, 130, 180)); // azul - cidade
  textFont('Arial');
}

function draw() {
  background(240);

  // Cenário
  fill(200, 255, 200);
  rect(0, 300, width, 100);
  fill(220);
  rect(400, 0, 400, 300);
  fill(180);
  rect(0, 0, 400, 300);

  // Desenhar personagens
  campo.mostrar();
  cidade.mostrar();

  // Balão de fala
  if (falaIndex < dialogo.length) {
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(150, 50, 500, 80, 10);
    noStroke();
    fill(0);
    textSize(16);
    text(dialogo[falaIndex], 160, 80);

    // Trocar fala a cada 3 segundos
    if (millis() - timer > 3000) {
      falaIndex++;
      timer = millis();
    }
  }
}

class Pessoa {
  constructor(x, y, cor) {
    this.x = x;
    this.y = y;
    this.cor = cor;
  }

  mostrar() {
    fill(this.cor);
    ellipse(this.x, this.y - 40, 50, 50); // cabeça
    rect(this.x - 15, this.y - 40, 30, 60); // corpo
  }
}
