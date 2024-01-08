function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.getElementById('controls');
const input = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', () => createBoxes(+input.value));
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Clear existing boxes before creating new ones
  
  const initialSize = 30;
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = initialSize + i * 10;
    
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.marginBottom = '5px';
    
    boxesDiv.appendChild(div);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = ''; // Clear the contents of div#boxes
}