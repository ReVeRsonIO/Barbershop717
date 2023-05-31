var container = document.querySelector(".comments__group");
var slides = document.querySelectorAll(".comments__card");
var isDragging = false;
var startPosition;
var startScrollLeft;
var animationId;

// Отслеживание события нажатия кнопки мыши или касания
container.addEventListener("mousedown", dragStart);
container.addEventListener("touchstart", dragStart);

// Отслеживание события перемещения курсора или пальца
container.addEventListener("mousemove", dragMove);
container.addEventListener("touchmove", dragMove);

// Отслеживание события отпускания кнопки мыши или прекращения касания
container.addEventListener("mouseup", dragEnd);
container.addEventListener("touchend", dragEnd);

// Функция для бесконечной прокрутки
function scrollContainer() {
  container.scrollLeft += 1;
  if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    container.scrollLeft = 0;
  }
  animationId = requestAnimationFrame(scrollContainer);
}

// Запуск бесконечной прокрутки
scrollContainer();

// Функции для перетаскивания
function dragStart(e) {
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX || e.touches[0].clientX;
  startScrollLeft = container.scrollLeft;
  cancelAnimationFrame(animationId);
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
  animationId = requestAnimationFrame(scrollContainer);
}

// Функция для перемещения элементов
function moveSlide() {
  var firstSlide = container.querySelector(".comments__card");
  var lastSlide = container.querySelector(".comments__card:last-child");
  var slideWidth = lastSlide.offsetWidth;
  if (container.scrollLeft >= lastSlide.offsetLeft + slideWidth) {
    container.appendChild(firstSlide);
    container.scrollLeft -= slideWidth;
  }
}

// Запуск перемещения элементов при каждом событии scroll
container.addEventListener("scroll", moveSlide);