const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", handlerBlur);

function handlerBlur() {
  if (validInput.value.trim().length === Number(validInput.dataset.length)) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
