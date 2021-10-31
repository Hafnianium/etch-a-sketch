for (i = 0; i < 256; i++) {
  const squareDivs = document.createElement('div')
  squareDivs.classList.add('squareDiv')
  squareDivs.style.borderColor = 'black';
  squareDivs.style.borderStyle = 'solid'
  squareDivs.style.borderWidth = '2px'
  squareDivs.textContent = i + 1
  grid.appendChild(squareDivs)
}

const squareDivs = grid.querySelectorAll('div')

function hover(e) {
  this.classList.add('hover')
  console.log(this.classList.value);
}

squareDivs.forEach(div => div.addEventListener('mouseover', hover));