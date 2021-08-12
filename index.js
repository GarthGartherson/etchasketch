const body = document.querySelector('body');
const container = document.querySelector('.container')
const resetButton = document.querySelector('.grid-reset');

resetButton.addEventListener('click', () => {
    container.innerHTML = ''
    let size = prompt('What size is the square?')
    while(size < 0 || size > 100){
        size = prompt('What size is the square?')
    }
    generateGrid(size)
})

container.addEventListener('mouseenter', (e) => {
    console.log(e.target.classList)
})

function generateGrid(boxes = 16){
    let width = 960/boxes;
    let height = 960/boxes;
    console.log(height, width)
    for(let i= 0; i < boxes; i++){
        let row = document.createElement('div')
        for(let j=0; j< boxes; j++){
            let gridBox = document.createElement('div')
            gridBox.style.width = `${width}px`;
            gridBox.style.height = `${height}px`;
            gridBox.style.backgroundColor = 'purple';
            row.appendChild(gridBox)
            container.appendChild(row)
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'red'
            })
        }
    }
}

generateGrid()



// body.addEventListener('load', )