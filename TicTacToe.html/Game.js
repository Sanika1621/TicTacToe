const Board = require("./Board.js");
const Player = require("./Player.js");

class Game {
    constructor(board, player0, player1) {
        this.board = board;
        this.player0 = player0;
        this.player1 = player1;
        this.turn = 0;
        this.isGameOver = false;
    }

    static newGame(player0Name, player1Name) {
        let board = new Board();
        let player0 = new Player(player0Name, "X");
        let player1 = new Player(player1Name, "O");
        return new Game(board, player0, player1);
    }

    play(cellNumber) {
        if (this.isGameOver) {
            console.log("Game has ended.");
            this.board.printBoard();
            return;
        }

        if (!Number.isInteger(cellNumber) || cellNumber < 0 || cellNumber > 8) {
            return "Invalid number. Try again.";
        }

        let isCellEmpty = this.board.isEmpty(cellNumber);
        if (!isCellEmpty) {
            return "Cell already marked. Try again.";
        }

        let currentPlayer;
        if (this.turn % 2 === 0) {
            currentPlayer = this.player0;
        } else {
            currentPlayer = this.player1;
        }

        currentPlayer.markCell(this.board.cells[cellNumber]);
        this.turn++;

        console.log(currentPlayer.name + " marked cell " + cellNumber);
        this.board.printBoard();

        let [winnerSymbol, gameStatus] = this.board.analyse();
        if (gameStatus === "Win" && winnerSymbol === "X") {
            this.isGameOver = true;
            let winner = this.player0.symbol === winnerSymbol ? this.player0 : this.player1;
            console.log(winner.name + " Wins!");
        } else if (gameStatus === "Win" && winnerSymbol === "O") {
            this.isGameOver = true;
            let winner = this.player0.symbol === winnerSymbol ? this.player0 : this.player1;
            console.log(winner.name + " Wins!");
        } else if (gameStatus === "Draw") {
            this.isGameOver = true;
            console.log("Game has been Drawn!");
        } else {
            console.log("Next turn: " + (this.turn % 2 === 0 ? this.player0.name : this.player1.name));
        }
        return " ";
    }
}

module.exports = Game.newGame; 

