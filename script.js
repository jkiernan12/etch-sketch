var currentMode = "black"; //default coloring mode
let normalColor = "white"; //default grid color on reset
let container = document.getElementById("sketch-container");//get size of container for responsive sizing
    style = window.getComputedStyle(container),
    containerWidth = style.getPropertyValue('width').replace(/[^-\d\.]/g, "");//get width numeric value
    widthUnits = style.getPropertyValue('width').replace(/[^-\D\.]/g, "");//get width units
//create grid of n x n blocks
function createBlock(quantity) {
  let amount = quantity * quantity;
  let allBlocks = document.querySelectorAll(".block");
  allBlocks.forEach((block) => block.remove());

  for (let i = 0; i < amount; i++) {
    let block = document.createElement("div");

    block.classList.add("block");
    container.appendChild(block);
    blockSize = "" + containerWidth / quantity + widthUnits;
    block.style.width = blockSize;
    block.style.height = blockSize;
    block.addEventListener("mouseenter", colorBlock, false);
    block.addEventListener("touchstart", colorBlock, false);
  }
}

document.addEventListener("mousedown", clickTrue);
function clickTrue() {
colorOn = true;
container.classList.remove("select-cursor");
container.classList.add("paintbrush");
}

document.addEventListener("mouseup", clickFalse);
function clickFalse() {
  colorOn = false;
  container.classList.remove("paintbrush");
  container.classList.add("select-cursor");
}
container.addEventListener("contextmenu", colorPalette, false);
function colorPalette() {
  preventDefault();
  return false

}

  var colorOn = false;
function colorBlock() {
  if (colorOn == true) {//determines each blocks color on hover
  if (currentMode == "black"){
  event.target.style.backgroundColor = "black";
} else if (currentMode == "rainbow") {
  event.target.style.backgroundColor = magicRainbow();
} else if (currentMode == "custom") {
  event.target.style.backgroundColor = colorChooser();
}
}
}

createBlock(16); //page loads with 16x16 grid
//reset listener and function
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
  let resetBlocks = document.querySelectorAll(".block");
  resetBlocks.forEach(
    (element) => (element.style.backgroundColor = normalColor)
  );
}

// grid size listener, button and input
let gridInput = document.querySelector("#grid-input").value;
let gridButton = document.querySelector("#grid-input");
gridButton.addEventListener("input", gridSizer);

function gridSizer() {
  gridInput = document.querySelector("#grid-input").value;
  createBlock(gridInput);
}

// rainbow button and listener



function magicRainbow(){
  let rValue = Math.floor(Math.random() * 255);
  let gValue = Math.floor(Math.random() * 255);
  let bValue = Math.floor(Math.random() * 255);
  let rgbValue = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
  return rgbValue;
}
//mode management
//rainbow
let rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", rainbowTrue);

function rainbowTrue() {
  return currentMode = "rainbow";
}

//black
let blackButton = document.querySelector("#black-btn");
blackButton.addEventListener("click", blackTrue);

function blackTrue() {
  return currentMode = "black";
}
//selected
let customColor = document.querySelector("#custom-color");
customColor.addEventListener("input", customTrue);

function customTrue() {
  return currentMode = "custom";
}
function colorChooser (){
  colorChoice = "" + customColor.value + "";
  return colorChoice;
}
