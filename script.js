

const container = document.querySelector(".container");




for (let i = 0; i < 16; i++) {
    const row1 = document.createElement("div");
    row1.id = "container2";
    container.appendChild(row1);
    console.log(i)
    for (let i = 0; i < 16; i++) {
        const row2 = document.createElement("div");
        row2.id = "container3";
        row1.appendChild(row2);
        console.log(i)
    
}
}
