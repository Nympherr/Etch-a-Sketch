
let size = 50;
let clicked = false;
let exists = false
let color = "red";
let innerDiv = new Array(size);
let outerDiv = new Array(size);

let container = document.querySelector("#container");
let erase = document.querySelector("#erase");
let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector("#sliderValue");

slider.oninput = function() {
    sliderValue.textContent = `${this.value} x ${this.value}`;
  }

erase.addEventListener("click",newPaint);

start(size);

function newPaint(){
    if(!exists){
        return;
    }

    for(let i = 0; i < size; i++){
        container.removeChild(outerDiv[i]);
    }

    innerDiv = new Array(size);
    outerDiv = new Array(size);
    exists = false;

    start(size);
}

function start(size){

    for(let i = 0; i < size ; i++){

        outerDiv[i] = document.createElement("div");
        outerDiv[i].style.cssText = "display:flex; justify-content:space-evenly; flex-grow:1; flex-shrink:1;            overflow:hidden; "
        container.appendChild(outerDiv[i]);

        for(let j = 0; j < size; j++){

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