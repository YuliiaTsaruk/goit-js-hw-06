// Завдання 1
// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const listCategories = document.querySelectorAll("li.item");
// console.dir(listCategories);
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
