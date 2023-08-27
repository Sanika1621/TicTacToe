const Board = require("./Board.js");
class Player {
    constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
    }
  
    markCell(cellObj) {
      cellObj.markCell(this.symbol);//constructor me hai
    }
  }
  
  module.exports = Player;