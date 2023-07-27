const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
let result = [];
ingredients.map((elem) => {
  const newLi = document.createElement("li");
  newLi.textContent = elem;
  newLi.classList.add("item");
  result.push(newLi);
});

const [...newLi] = result;
list.append(...newLi);
