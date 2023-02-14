
let x = 50;
let y = 50;
let clicked = false;
let color = "green";

let innerDiv = new Array(x);
let outerDiv = new Array(y);

let container = document.querySelector("#container");

for(let i = 0; i < x ; i++){

    outerDiv[i] = document.createElement("div");
    outerDiv[i].style.cssText = "display:flex; justify-content:space-evenly; flex-grow:1; flex-shrink:1; overflow:hidden; "
    container.appendChild(outerDiv[i]);

    for(let j = 0; j < y; j++){

        innerDiv[j] = document.createElement("div");

        innerDiv[j].addEventListener("mousedown", function(){
            this.style.backgroundColor = color;
            clicked = true;
        });
        innerDiv[j].addEventListener("mouseover", function(){
            if(clicked){
                this.style.backgroundColor = color;
            }
        });
        innerDiv[j].addEventListener("mouseup", function(){
            clicked = false;
        });

        innerDiv[j].style.cssText = " display:flex; flex-grow:1; flex-shrink:1;";
        innerDiv[j].textContent = " ";
        outerDiv[i].appendChild(innerDiv[j]);
    }
}

function colorChange(){
    this.classList.add("colored");
}