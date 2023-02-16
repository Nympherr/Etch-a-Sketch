
let gridSize = 32;
let clicked = false;
let color = "red";
let innerDiv = new Array(gridSize);
let outerDiv = new Array(gridSize);
let mode = "colorMode";

let container = document.querySelector("#container");
let clear = document.querySelector("#clear");
let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector("#sliderValue");
let palette = document.querySelector("#head");
let eraser = document.querySelector("#eraser");
let fill = document.querySelector("#fill");
let borders = document.querySelector("#borders");

eraser.addEventListener("click", function(){
    color = "white";
    eraser.classList.toggle("clicked");
})
fill.addEventListener("click", function(){
    color = "white";
    fill.classList.toggle("clicked");
})
borders.addEventListener("click", function(){
    color = "white";
    borders.classList.toggle("clicked");
})

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

clear.addEventListener("click",newGrid);

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
        outerDiv[i].classList.add("outerDiv");
        container.appendChild(outerDiv[i]);

        for(let j = 0; j < gridSize; j++){

            innerDiv[j] = document.createElement("div");
            innerDiv[j].classList.add("innerDiv");
            innerDiv[j].style.cssText = " display:flex; flex-grow:1; flex-shrink:1;";
            innerDiv[j].textContent = "";
            outerDiv[i].appendChild(innerDiv[j]);
        }
    }
}

container.addEventListener("mousedown", function(event) {

    event.preventDefault();

    if (event.target.classList.contains("innerDiv")) {
        setTimeout(function() {

            const element = event.target;
            element.style.backgroundColor = color;
            clicked = true;
          }, 35); 
        }
    });

container.addEventListener("mousemove", function(event) {
    if (clicked && event.target.classList.contains("innerDiv")) {
        const element = event.target;
        element.style.backgroundColor = color
    }
});

document.addEventListener("mouseup", ()=> clicked = false);

