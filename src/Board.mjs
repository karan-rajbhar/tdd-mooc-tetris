export class Board {
  width;
  height;
  board = [];
  maxElement = 0;
  currentBlockX = 0;
  currentBlockY = 0;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.maxElement = height;
    for (let i = 0; i < height; i++) {
      let tempArray = [];
      for (let i = 0; i < width; i++) {
        tempArray.push(["."]);
      }
      this.board.push(tempArray);
    }
  }

  toString() {
    let concatenatedString = "";

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        concatenatedString += this.board[i][j] + "";
      }
      concatenatedString += "\n"; // Add a newline character after each inner array
    }

    return concatenatedString;
  }

  drop(block) {
    this.currentBlockY = Math.floor(this.board.length / 2);
    if (this.hasFalling()) {
      this.board[this.currentBlockX][this.currentBlockY] = block;
    } else {
      throw new Error("already falling");
    }
  }

  tick() {
    // Swap current with next x   
    let currentBlock = this.board[this.currentBlockX][this.currentBlockY];
    this.board[this.currentBlockX][this.currentBlockY] = this.board[this.currentBlockX + 1][this.currentBlockY];
    this.board[this.currentBlockX + 1][this.currentBlockY] = currentBlock;
    this.currentBlockX +=1    
  }

  hasFalling() {
    if(this.currentBlockX < this.maxElement){
      return true
    }
    return false
  }
}
