
const container = document.querySelector('.grid-container'); 
const containerDimensions = 860;
let exists = 0;
// creating and appending the boxes for the grid
function setDimensions(){
    const boxesToRemove = document.querySelectorAll('.box')
    boxesToRemove.forEach((div) => {container.removeChild(div)})
    let dimensions = prompt('Choose a number between 1 - 100');
    if(dimensions < 0 || dimensions > 100) {
        alert('Number not in range, choose number in range!')
    } else{
     let totalBoxes = Math.pow(dimensions, 2);
        for (let i = 0; i < totalBoxes; i++) {
            let boxDimensions = containerDimensions/dimensions;
            div = document.createElement('div');
            div.classList.add('box');
            div.style.height = `${boxDimensions - 2}px`;
            div.style.width = `${boxDimensions - 2}px`;
            container.appendChild(div);
        }
        const activeBoxes = document.querySelectorAll('.box');
        activeBoxes.forEach((div) => {
        div.addEventListener('mouseenter', colorBlocks);
        })
    }
}

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', setDimensions);

function colorBlocks() {
    this.style.backgroundColor = 'black'
}