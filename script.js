const grid = document.querySelector('.grid-square');


for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.cssText = 'display: flex; flex-wrap: wrap;';  
    for (let i = 0; i < 16; i++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.style.cssText = 'flex-basis: 100%; background-color: white;';
        row.appendChild(col);
    }
    grid.appendChild(row);
}