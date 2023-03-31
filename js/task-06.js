const input = document.querySelector("#validation-input");

const classValid = "valid";
const classInvalid = "invalid";

function checkInput(event) {
  input.classList = [];
  if (
    event.currentTarget.value.trim().length === parseInt(input.dataset.length)
  )
    input.classList.add(classValid);
  else input.classList.add(classInvalid);
}

input.addEventListener("blur", checkInput);

// function removeClass() {
//   if (input.classList.length > 0) input.classList.remove(...input.classList);
// }
// function addClass(valueClass) {
//   input.classList.add(valueClass);
// }

// function checkInput(event) {
//   if (event.currentTarget.value.trim() === "") removeClass();
//   else if (
//     event.currentTarget.value.trim().length === parseInt(input.dataset.length)
//   )
//     addClass("valid");
//   else addClass("invalid");
// }

// input.addEventListener("blur", checkInput);
// input.addEventListener("focus", removeClass);
