const query = document.querySelector("#name-input");

const title = document.querySelector("#name-output");

query.addEventListener("input", handlerQuery);

function handlerQuery(evt) {
  title.textContent = evt.currentTarget.value;
}
