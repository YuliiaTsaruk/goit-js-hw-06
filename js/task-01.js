const listCategories = document.querySelectorAll("li.item");
// console.dir(listCategories);
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
