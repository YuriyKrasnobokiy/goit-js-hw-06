const inputRage = document.querySelector("#font-size-control");

const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputRage.value}px`;
// Додав зразу зміну розміру тексту спану бо при завантаженні сторінки розмір тексту спану не відповідає дефолтному значенню інпута (50%). Тільки потягнувши його змінюється розмір тексту.

inputRage.addEventListener("input", handlerRage);

function handlerRage() {
  spanText.style.fontSize = `${inputRage.value}px`;
}
