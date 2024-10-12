function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const inputNumber = document.querySelector('input[type="number"]');
  const createBoxesBtn = document.querySelector("button[data-create]");
  const destroyBoxesBtn = document.querySelector("button[data-destroy]");
  const containerBoxes = document.querySelector("#boxes");
  
  const handleClickCreate = (event) => {
    const chosenNumber = Number.parseInt(inputNumber.value);
    containerBoxes.innerHTML = "";
  
    if (chosenNumber >= 1 && chosenNumber <= 100) {
      createBoxes(chosenNumber);
    } else {
      alert("Please, enter number between 1 and 100!");
    }
  
    inputNumber.value = "";
  };
  createBoxesBtn.addEventListener("click", handleClickCreate);
  
  const handleClickDestroy = (event) => {
    containerBoxes.innerHTML = "";
  };
  destroyBoxesBtn.addEventListener("click", handleClickDestroy);
  
  function createBoxes(amount) {
    const boxes = [];
    let width = 30;
    let height = 30;
  
    for (let i = 0; i < amount; i++) {
      let randomHexColor = getRandomHexColor();
      boxes.push(
        `<div class="box" style="background-color:${randomHexColor}; height:${height}px; width:${width}px;">${
          i + 1
        }</div>`
      );
      width += 10;
      height += 10;
    }
    const markupBoxes = boxes.join("");
    containerBoxes.insertAdjacentHTML("afterbegin", markupBoxes);
  }