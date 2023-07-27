const counter = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const step = 1;

decrement.addEventListener("click", () => {
  counterValue -= step;
  counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += step;
  counter.textContent = counterValue;
});
