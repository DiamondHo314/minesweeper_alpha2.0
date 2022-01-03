class Board {
  constructor() {
    this.length = 9
    this.width = 9
    this.boxes = Array(this.length * this.width).fill(null)
  }

  boxClick(row, column) {
    console.log(`clicked ${column + row * this.width}`)
  }

  createHtmlBoard() {
    for (let i = 0; i < 9; i++) {
      let row = document.createElement('div')
      row.classList.add('row')
    
      for (let j = 0; j < 9; j++) {
        let box = document.createElement('div')
        box.classList.add('box')

        box.addEventListener('click', () => this.boxClick(i, j))

        row.appendChild(box)
      }
    
      document.getElementById('board').appendChild(row)
    }
  }
}

let board = new Board()
board.createHtmlBoard()
