let angle = 0;
let petalCount = 8; // Количество лепестков
let petalRadius = 120; // Радиус расположения лепестков
let texts = ["Ты самая красивая", "Ты самая умная", "Ты самая милая", "Ты самая обворожительная", "Ты самая прекрасная девушка в мире", "Не сдавайся у тебя все получится", "Суецид - не выход", "Ты самая самая"]

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  translate(width / 2, height / 2); // Перемещаем центр координат в середину экрана
  petals();
  noStroke(); // Центр цветка - белый круг
  fill('yellow');
  ellipse(0, 0, 140, 140); // Центральный круг
  // Увеличиваем угол вращения на каждом кадре
  angle += 0.01;
}

function petals() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; // Цвета радуги
  for (let i = 0; i < petalCount; i++) {
    let colorIndex = i % colors.length;
    fill(colors[colorIndex]);
    // Используем равномерное распределение для расположения лепестков вокруг центра
    let petalX = cos(angle + i * TWO_PI / petalCount) * petalRadius;
    let petalY = sin(angle + i * TWO_PI / petalCount) * petalRadius;
    ellipse(petalX, petalY, 90, 90);
    // Напишем текст на лепестке
    fill(255); // Белый цвет текста
    textSize(12); // Размер шрифта
    textAlign(CENTER, CENTER); // Выравнивание текста
    text(texts[i], petalX, petalY); // Текст на лепестке
  }
}
