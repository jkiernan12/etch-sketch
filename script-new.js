var currentMode = "black"; //default coloring mode
//global variables for easy experimenting
let normalColor = "white"; //default grid color on reset
let containerWidth = 50; //size of grid; has to match stylesheet
let containerUnits = "vw" //measurement unit for container

//create grid of n x n blocks
function createBlock(quantity) {
  let amount = quantity * quantity;
  let allBlocks = document.querySelectorAll(".block");
  allBlocks.forEach((block) => block.remove());

  for (let i = 0; i < amount; i++) { //iterate through each block
    let block = document.createElement("div");
    let container = document.getElementById("sketch-container");
    block.classList.add("block");
    container.appendChild(block);
    blockSize = "" + containerWidth / quantity + containerUnits;
    block.style.width = blockSize;
    block.style.height = blockSize;
    block.addEventListener("mouseenter", colorBlock, false)//work
  }
}

function colorBlock() { //determines each blocks color on hover
  event.target.style.backgroundColor = currentMode;
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

//rainbow button, listener and function
let rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", rainbowTrue);

function rainbowTrue() {
  let rValue = Math.floor(Math.random() * 255);
  let gValue = Math.floor(Math.random() * 255);
  let bValue = Math.floor(Math.random() * 255);
  let rgbValue = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
  return currentMode = rgbValue;
}

//black button, listener and function
let blackButton = document.querySelector("#black-btn");
blackButton.addEventListener("click", blackTrue);
function blackTrue() {
  return currentMode = "black";
}
//selected button, listener and function
let customColor = document.querySelector("#custom-color");
customColor.addEventListener("input", customTrue);

function customTrue() {
  colorChoice = "" + customColor.value + "";
  return currentMode = colorChoice;
}
