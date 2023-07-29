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
  amount = input.value;

  for (let i = 0; i < Number(amount); i += 1) {
    let newEl = document.createElement("div");
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = "30px";
    newEl.style.height = "30px";
    elements.divBoxes.append(newEl);
  }
}

function destroyBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < Number(amount); i += 1) {
    elements.divBoxes.lastElementChild.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
