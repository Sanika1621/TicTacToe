const Cell = require("./Cell")

class Board {
  constructor() {
    this.cells = [new Cell(), new Cell(), new Cell(),
    new Cell(), new Cell(), new Cell(),
    new Cell(), new Cell(), new Cell()
    ]
  }
  isEmpty(cellNumber) {
    return this.cells[cellNumber].isEmpty()
  }
  markCell(cellNumber, symbol) {
    this.cells[cellNumber].markCell(symbol)
  }
  analyse() {
    if (this.cells[0].getMark() == this.cells[1].getMark() &&
      this.cells[0].getMark() == this.cells[2].getMark() &&
      !this.cells[0].isEmpty()) {
      return [this.cells[0].getMark(), "Win"]
    }
    if (this.cells[3].getMark() == this.cells[4].getMark() &&
      this.cells[3].getMark() == this.cells[5].getMark() &&
      !this.cells[3].isEmpty()) {
      return [this.cells[3].getMark(), "Win"]
    }
    if (this.cells[6].getMark() == this.cells[7].getMark() &&
      this.cells[6].getMark() == this.cells[8].getMark() &&
      !this.cells[6].isEmpty()) {
      return [this.cells[6].getMark(), "Win"]
    }
    if (this.cells[0].getMark() == this.cells[3].getMark() &&
      this.cells[0].getMark() == this.cells[6].getMark() &&
      !this.cells[0].isEmpty()) {
      return [this.cells[0].getMark(), "Win"]
    }
    if (this.cells[1].getMark() == this.cells[4].getMark() &&
      this.cells[1].getMark() == this.cells[7].getMark() &&
      !this.cells[1].isEmpty()) {
      return [this.cells[1].getMark(), "Win"]
    }
    if (this.cells[2].getMark() == this.cells[5].getMark() &&
      this.cells[2].getMark() == this.cells[8].getMark() &&
      !this.cells[2].isEmpty()) {
      return [this.cells[2].getMark(), "Win"]
    }
    if (this.cells[0].getMark() == this.cells[4].getMark()
      && this.cells[0].getMark() == this.cells[8].getMark() &&
      !this.cells[0].isEmpty()) {
      return [this.cells[0].getMark(), "Win"]
    }
    if (this.cells[2].getMark() == this.cells[4].getMark() &&
      this.cells[2].getMark() == this.cells[6].getMark() &&
      !this.cells[2].isEmpty()) {
      return [this.cells[2].getMark, "Win"]
    }
    if (this.drawChecker()) {
      return ["", "Draw"]
    }
    return ["", ""]
  }
  drawChecker() {
    if (!this.cells[0].isEmpty() && !this.cells[1].isEmpty() && !this.cells[2].isEmpty() &&
      !this.cells[3].isEmpty() && !this.cells[4].isEmpty() && !this.cells[5].isEmpty() &&
      !this.cells[6].isEmpty() && !this.cells[7].isEmpty() && !this.cells[8].isEmpty()) {
      return true
    }
    return false
  }

  printBoard(){
    console.log(this.cells)
  }
}
module.exports = Board