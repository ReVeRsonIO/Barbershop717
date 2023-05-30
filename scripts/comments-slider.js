// Определение переменных
var container = document.querySelector(".comments__group");
var isDragging = false;
var startPosition;
var startScrollLeft;

// Отслеживание события нажатия кнопки мыши или касания
container.addEventListener("mousedown", dragStart);
container.addEventListener("touchstart", dragStart);

// Отслеживание события перемещения курсора или пальца
container.addEventListener("mousemove", dragMove);
container.addEventListener("touchmove", dragMove);

// Отслеживание события отпускания кнопки мыши или прекращения касания
container.addEventListener("mouseup", dragEnd);
container.addEventListener("touchend", dragEnd);

function dragStart(e) {
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX || e.touches[0].clientX;
  startScrollLeft = container.scrollLeft;
}

function dragMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  var currentPosition = e.clientX || e.touches[0].clientX;
  var distance = currentPosition - startPosition;
  container.scrollLeft = startScrollLeft - distance;
}

function dragEnd(e) {
  isDragging = false;
}

setInterval(function() {
    container.scrollLeft += 1;
  }, 50);