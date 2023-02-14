
let gridSize = 32;
let clicked = false;
let exists = false
let color = "red";
let innerDiv = new Array(gridSize);
let outerDiv = new Array(gridSize);

let container = document.querySelector("#container");
let erase = document.querySelector("#erase");
let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector("#sliderValue");
let palette = document.querySelector("#head");

palette.addEventListener("input", updateColor);
function updateColor(event) {
      color = event.target.value;
    };

sliderValue.textContent = `${slider.value} x ${slider.value}`; 

slider.addEventListener("input",function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
  });
slider.addEventListener("mouseup", function(){
    gridSize = slider.value;
    console.log(gridSize);
    newGrid(gridSize);
})

erase.addEventListener("click",newGrid);

createGrid(gridSize);

function newGrid(){

    for(let i = 0; i < outerDiv.length; i++){
        container.removeChild(outerDiv[i]);
    }

    innerDiv.length = gridSize;
    outerDiv.length = gridSize;


    createGrid(gridSize);
}

function createGrid(gridSize){

    for(let i = 0; i < gridSize ; i++){

        outerDiv[i] = document.createElement("div");
        outerDiv[i].style.cssText = "display:flex; justify-content:space-evenly; flex-grow:1; flex-shrink:1;            overflow:hidden; "
        container.appendChild(outerDiv[i]);

        for(let j = 0; j < gridSize; j++){

            innerDiv[j] = document.createElement("div");

            innerDiv[j].addEventListener("mousedown", mouseDown);
            innerDiv[j].addEventListener("mouseover", mouseOver);
            innerDiv[j].addEventListener("mouseup", ()=> clicked = false);

            innerDiv[j].style.cssText = " display:flex; flex-grow:1; flex-shrink:1;";
            innerDiv[j].textContent = " ";
            outerDiv[i].appendChild(innerDiv[j]);
        }
    }
}

function mouseDown(){
    this.style.backgroundColor = color;
    clicked = true;
    exists = true;
}
function mouseOver(){
    if(clicked){
        this.style.backgroundColor = color;
    }
}