/** @format */

const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElements = document.querySelector("main");

const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainElements.style.fontSize = fontSize;
  mainElements.style.backgroundColor = bgColor;
};

// load local value
const initialSetup = () => {
  const bgColor = localStorage.getItem("bgColor");
  const fontSize = localStorage.getItem("fontSize");

  if (bgColor && fontSize) {
    setValues(fontSize, bgColor);
  }
  if (!bgColor && !fontSize) {
    setValues("16px", "aqua");
  }
  if (!bgColor && fontSize) {
    setValues(fontSize, "aqua");
  }
  if (bgColor && !fontSize) {
    setValues("16px", bgColor);
  }
};

// changeFontSize
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value;
  mainElements.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};

// changeBgColor
const changeBgColor = (event) => {
  const selectedBgColor = event.target.value;
  mainElements.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};

// cleaarLocalStorage
const clearLocalStorage = (event) => {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontSize");
  setValues("16px", "aqua");
};

// add evennt listener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);
initialSetup();
