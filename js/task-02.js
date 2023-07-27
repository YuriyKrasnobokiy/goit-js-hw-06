const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (item) {
  const newLi = document.createElement("li");
  newLi.textContent = item;
  newLi.classList.add("item");
  list.append(newLi);
});
