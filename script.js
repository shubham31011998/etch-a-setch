const gridContainer = document.querySelector('#grid-container');

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', changeSize);

window.addEventListener('load', defaultGrid);

function defaultGrid() {
    setGridColumnSize(16);
    fillGrid(16);
}

function setGridColumnSize(size) {
    // gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    gridContainer.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let divs = document.createElement('div');
        divs.classList.add("grid-element");
        divs.addEventListener("mouseover", drawImage);
        gridContainer.appendChild(divs);
    }

}

function drawImage(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}


function changeSize() {
    let gridSize = prompt("enter grid size", "");
    if (gridSize < 0 || gridSize > 100) {
        alert('Please enter valid number which lies in "0" - "100"');
        changeSize();
    } else {
        clearGrid();
        setGridColumnSize(gridSize);
        fillGrid(gridSize);
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}