function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const changeColorBtn = document.querySelector(".change-color");
  const currentColorInfo = document.querySelector(".color");
  
  const handleClick = (event) => {
    const currentColor = getRandomHexColor();
    currentColorInfo.textContent = currentColor;
    document.body.style.backgroundColor = currentColor;
  };
  
  changeColorBtn.addEventListener("click", handleClick);