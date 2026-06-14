

let container = document.querySelector(".container");
let container0 = document.querySelector(".container0");
const btn = document.querySelector("#btn")



function Grid(number) {
for (let i = 0; i < number; i++) { 
    const row1 = document.createElement("div");
    row1.id = "container2";
    container.appendChild(row1);
    console.log(i)
    for (let i = 0; i < number; i++) {
        const row2 = document.createElement("div");
        row2.id = "container3";
        row1.appendChild(row2);
        row2.addEventListener("mouseover", function () {
        row2.style.backgroundColor = "black";
        })
        console.log(i);
    
}
}
}


function askGrid() {

    let numberGrid = prompt("How many squares per side do you want for the new grid?", 16);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if (numberGrid <= 100) {
        Grid(numberGrid)
    }
    else {
        Grid(16)
        alert("pick a number lower than or equal to 100")
    }

    


}

Grid(16);

btn.addEventListener("click", askGrid);

