const elements = {
  button: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  body: document.querySelector("body"),
};

elements.button.addEventListener("click", handlerClick);

function handlerClick() {
  elements.body.style.backgroundColor = elements.color.textContent;
  elements.color.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
