const refs = {
  decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('button[data-action="increment"]'),
  counterEl: document.querySelector("#value"),
};

let counterValue = 0;

function targetButtonDecrementHandler() {
  counterValue -= 1;

  refs.counterEl.textContent = counterValue;
}

function targetButtonIncrementHandler() {
  counterValue += 1;

  refs.counterEl.textContent = counterValue;
}

refs.decrementBtnEl.addEventListener("click", targetButtonDecrementHandler);
refs.incrementBtnEl.addEventListener("click", targetButtonIncrementHandler);
