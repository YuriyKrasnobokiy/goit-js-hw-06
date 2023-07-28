const query = document.querySelector("#name-input");

const title = document.querySelector("#name-output");

query.addEventListener("input", handlerQuery);

function handlerQuery(evt) {
  if (evt.currentTarget.value === "") {
    title.textContent = "Anonymous";
  } else {
    title.textContent = evt.currentTarget.value.trim();
  }
}
