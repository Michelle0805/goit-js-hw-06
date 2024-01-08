const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.getElementById("ingredients");

// Create an array to store the created <li> elements
const listItems = [];

// Loop through the ingredients array
ingredients.forEach((ingredient) => {
  // Create a new <li> element
  const listItem = document.createElement("li");

  // Add the 'item' class to the <li> element
  listItem.classList.add("item");

  // Set the text content of the <li> element to the ingredient name
  listItem.textContent = ingredient;

  // Push the created <li> element to the listItems array
  listItems.push(listItem);
});

// Insert all <li> elements to the ul#ingredients list in a single operation
ulIngredients.append(...listItems);