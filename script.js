for (i = 0; i < 256; i++) {
  const square_i = document.createElement('div')
  square_i.classList.add('squareDiv')
  square_i.style.borderColor = 'black';
  square_i.style.borderStyle = 'solid'
  square_i.style.borderWidth = '2px'
  square_i.textContent = i + 1
  grid.appendChild(square_i)
}