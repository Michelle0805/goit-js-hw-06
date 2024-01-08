const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', (event) => {
  const fontSize = event.target.value + 'px'; // Get the value from the range input
  textSpan.style.fontSize = fontSize; // Set the font size of the text span
});
