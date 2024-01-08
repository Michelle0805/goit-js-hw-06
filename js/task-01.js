// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const firstCategory = categories[0];
console.log(`Category: ${firstCategory.firstElementChild.textContent}`);

const firstNumberOfElements = firstCategory.lastElementChild.children.length;
console.log (`Element: ${firstNumberOfElements}`);

const secondCategory = categories[1];
console.log(`Category: ${secondCategory.firstElementChild.textContent}`);

const secondNumberOfElements = secondCategory.lastElementChild.children.length;
console.log (`Element: ${secondNumberOfElements}`);

const thirdCategory = categories[2];
console.log(`Category: ${thirdCategory.firstElementChild.textContent}`);

const thirdNumberOfElements = thirdCategory.lastElementChild.children.length;
console.log (`Element: ${thirdNumberOfElements}`);