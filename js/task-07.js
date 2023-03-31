const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function resizeText(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}
text.style.fontSize = `${fontSizeControl.value}px`;
fontSizeControl.addEventListener("input", resizeText);
