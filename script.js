// functions
function setupGrid() {
  for (i = 0; i < 256; i++) {
    const squareDivs = document.createElement('div')
    squareDivs.classList.add('squareDiv')
    grid.appendChild(squareDivs)
  }
}

function hover(e) {
  this.classList.add('hover')
  console.log(this.classList.value);
}

function resetGrid () {
  grid.innerHTML = ''
  setupGrid()
  const squareDivs = grid.querySelectorAll('div')
  squareDivs.forEach(div => div.addEventListener('mouseover', hover));
}


setupGrid()

const squareDivs = grid.querySelectorAll('div')
const resetBtn = document.getElementById('resetBtn')

squareDivs.forEach(div => div.addEventListener('mouseover', hover));
resetBtn.addEventListener('click', resetGrid);

