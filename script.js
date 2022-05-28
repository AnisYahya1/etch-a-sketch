const grid = document.querySelector('.grid-square');

function creatingGrid(amount) {
    for (let i = 0; i < amount; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display: flex; flex-wrap: wrap;';  
        for (let i = 0; i < amount; i++) {
            const col = document.createElement('div');
            col.classList.add('col');
            col.style.cssText = 'flex-basis: 100%; background-color: white;';
            row.appendChild(col); 
        }
        grid.appendChild(row);
    }
    addingFunctionality();
}

function pixelChanger() {
    amount = prompt("Enter Amount of Pixels");
    const col = document.querySelectorAll(".col");
    const row = document.querySelectorAll(".row");
    row.forEach((row) => {
        grid.removeChild(row);
    });
    creatingGrid(amount);
    addingFunctionality();
}

function addingFunctionality(color = "black") {
    const col = document.querySelectorAll(".col");
    if (color == "rainbow") {
        col.forEach((col) => {
            col.addEventListener("mouseenter", (e) => {
                e.target.style.background = `hsl(${Math.random() * 360}, 100%, 50%`;
            });
        });
    }
    else {
        col.forEach((col) => {
            col.addEventListener("mouseenter", (e) => {
                e.target.style.background = color;
            });
        });
    }
}

function reset() {
    const col = document.querySelectorAll(".col");
    col.forEach((col) => {
        col.style.background = "white";
    })
}


creatingGrid(16);



