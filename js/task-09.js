function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.body;

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  
  // Change the background color of the body
  body.style.backgroundColor = randomColor;
  
  // Display the color value in the span
  colorSpan.textContent = randomColor;
});