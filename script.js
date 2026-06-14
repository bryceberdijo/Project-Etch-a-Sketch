

const container = document.querySelector(".container");



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

Grid(16);


