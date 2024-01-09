const container = document.querySelector('.container');

function createRow() {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i<16; i+=1) {
        const square = document.createElement('div');
        square.style.cssText = 'width: 50px; height: 50px; border: 1px solid black';
        row.appendChild(square);
    }
    container.appendChild(row);
}

for (let i = 0; i<16; i+=1) {
    createRow();
    console.log('crat')
}

createRow();
