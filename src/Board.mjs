export class Board {
  width;
  height;
  boardString = [];
  countTicks = 0;
  constructor(width, height) {
    this.width = width;
    this.height = height;
    for (let i = 0; i < height; i++) {
      let tempArray = [];
      for (let i = 0; i < width; i++) {
        tempArray.push(["."]);
      }
      this.boardString.push(tempArray);
    }
  }

  toString() {
    let concatenatedString = "";

    for (let i = 0; i < this.boardString.length; i++) {
      for (let j = 0; j < this.boardString[i].length; j++) {
        concatenatedString += this.boardString[i][j] + "";
      }
      concatenatedString += "\n"; // Add a newline character after each inner array
    }

    return concatenatedString;
  }

  drop(block) {
    if(this.countTicks > 0 && this.countTicks <=3){
      throw new Error("already falling")
    }
    this.boardString[0][1] = block;
    this.countTicks = 1;
  }

  tick() {
    this.countTicks = this.countTicks + 1;
    if (this.hasFalling()) {
      this.boardString.pop();
      let tempArray = [];
      for (let i = 0; i < this.width; i++) {
        tempArray.push(["."]);
      }
      this.boardString.unshift(tempArray);
    }
  }

  hasFalling() {
    if (this.countTicks > this.height) {
      return false;
    }
    return true;
  }
}
