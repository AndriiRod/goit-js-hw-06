const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

class Box {
  constructor(width, height) {
    this.boxElement = document.createElement("div");
    this.width = `${width}px`;
    this.height = `${height}px`;
  }

  createBox() {
    this.boxElement.style.backgroundColor = getRandomHexColor();
    this.boxElement.style.width = this.width;
    this.boxElement.style.height = this.height;
    return this.boxElement;
  }
}

let elements = [];

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  let width = 30;
  let height = 30;
  for (let i = 0; i < parseInt(refs.input.value); i += 1) {
    const element = new Box(width, height);
    elements.push(element.createBox());
    width += 10;
    height += 10;
  }
  refs.boxes.append(...elements);
}

function destroyBoxes() {
  elements.length = 0;
  while (refs.boxes.firstChild) {
    refs.boxes.children[0].remove();
  }
}
