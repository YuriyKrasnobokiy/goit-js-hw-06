const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill all the fields!");
  }

  let result = {
    email: email.value,
    password: password.value,
  };
  console.dir(result);

  event.currentTarget.reset();
}
