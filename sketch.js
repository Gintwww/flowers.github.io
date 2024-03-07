let angle = 0;
let petalCount = 8;
let petalRadius = 120;
let texts = ["Ты самая красивая", "Ты самая умная", "Ты самая милая", "Ты самая обворожительная", "Ты самая прекрасная девушка в мире", "Не сдавайся у тебя все получится", "Суецид - не выход", "Ты самая самая"]

function setup() {
  createCanvas(700, 700);

}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  petals();
  noStroke(); 
  fill('yellow');
  ellipse(0, 0, 140, 140);
  angle += 0.01;
}

function petals() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  for (let i = 0; i < petalCount; i++) {
    let colorIndex = i % colors.length;
    fill(colors[colorIndex]);
    let petalX = cos(angle + i * TWO_PI / petalCount) * petalRadius;
    let petalY = sin(angle + i * TWO_PI / petalCount) * petalRadius;
    ellipse(petalX, petalY, 90, 90);
    fill(255); 
    textSize(12); 
    textAlign(CENTER, CENTER); 
    text(texts[i], petalX, petalY); 
  }
}
