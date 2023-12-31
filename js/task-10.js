const elements = {
  divControls: document.querySelector("#controls"),
  buttons: document.querySelectorAll("button"),
  divBoxes: document.querySelector("#boxes"),
};

const buttonCreate = elements.buttons[0];
const buttonDestroy = elements.buttons[1];

const input = elements.divControls.firstElementChild;

buttonCreate.addEventListener("click", createBoxes);

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  elements.divBoxes.innerHTML = "";
  amount = input.value;
  let arr = [];
  for (let i = 0; i < Number(amount); i += 1) {
    const newEl = document.createElement("div");
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${30 + 10 * i}px`;
    newEl.style.height = `${30 + 10 * i}px`;
    arr.push(newEl);
  }
  elements.divBoxes.append(...arr);
}

function destroyBoxes() {
  input.value = "";
  elements.divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
