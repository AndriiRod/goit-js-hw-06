const formEntryField = document.querySelector("#name-input");
const formText = document.querySelector("#name-output");
const clearBtn = document.createElement("button");

clearBtn.type = "button";
clearBtn.textContent = "Clear";
clearBtn.style.marginLeft = "20px";

formEntryField.after(clearBtn);

const defaultValueFormText = formText.textContent;

function ChangingFormText(event) {
  event.currentTarget.value.trim() === ""
    ? (formText.textContent = defaultValueFormText)
    : (formText.textContent = event.currentTarget.value);
}

function ClearformEntryField() {
  formEntryField.value = "";
}

formEntryField.addEventListener("input", ChangingFormText);
clearBtn.addEventListener("click", ClearformEntryField);
