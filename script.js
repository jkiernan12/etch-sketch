var currentMode = "black"; //default coloring mode
let normalColor = "white"; //default grid color on reset
let containerWidth = 400; //size of grid in px

//create grid of n x n blocks
function createBlock(quantity) {
  let amount = quantity * quantity;
  let allBlocks = document.querySelectorAll(".block");
  allBlocks.forEach((block) => block.remove());

  for (let i = 0; i < amount; i++) {
    let block = document.createElement("div");
    let container = document.getElementById("sketch-container");
    block.classList.add("block");
    container.appendChild(block);
    blockSize = "" + containerWidth / quantity + "px";
    block.style.width = blockSize;
    block.style.height = blockSize;
    block.addEventListener("mouseenter", colorBlock, false)//work
  }
  //let blockName = document.querySelectorAll(".block");
  //blockName.forEach((block) =>
  //  block.addEventListener("mouseenter", colorBlock, false)
//  );
}

function colorBlock() { //determines each blocks color on hover
  if (currentMode == "black"){
  event.target.style.backgroundColor = "black";
} else if (currentMode == "rainbow") {
  event.target.style.backgroundColor = magicRainbow();
} else if (currentMode == "custom") {
  event.target.style.backgroundColor = colorChooser();
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
