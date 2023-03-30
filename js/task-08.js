const form = document.querySelector(".login-form");

function formSubmit(event) {
  event.preventDefault();
  const fildForm = event.currentTarget.elements;
  if (fildForm.email.value === "" || fildForm.password.value === "")
    alert("Всі поля повинні бути заповнені!!");
  else {
    const user = {
      email: fildForm.email.value,
      password: fildForm.password.value,
    };
    console.log(user);
    event.currentTarget.reset();
  }
}

form.addEventListener("submit", formSubmit);
