const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

// Initialize the counter value
let counterValue = 0;

// Function to update the counter value and interface
const updateCounter = () => {
  counterValueSpan.textContent = counterValue;
};

// Event listener for decrement button
decrementButton.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

// Event listener for increment button
incrementButton.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

// Initial update of the counter interface
updateCounter();