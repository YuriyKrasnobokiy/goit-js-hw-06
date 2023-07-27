const categories = document.querySelector("#categories");

console.dir(`Numbers of categories: ${categories.children.length}`);
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.children.length}`);
});
