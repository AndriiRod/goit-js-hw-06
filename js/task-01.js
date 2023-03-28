const listCategoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listCategoriesEl.length}`);

listCategoriesEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
