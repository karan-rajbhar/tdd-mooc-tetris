export class Board {
  width;
  height;
  boardString = [];
  constructor(width, height) {
    this.width = width;
    this.height = height;
    for (let i = 0; i < height; i++) {

      let tempArray=[]
      for (let i = 0; i < width; i++) {
        tempArray.push(['.']);
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


  drop(block){
    outerLoop: for (let i = 0; i < this.boardString.length; i++) {
      for (let j = 0; j < this.boardString[i].length; j++) {
        if(this.boardString[i][j] != "." ){
          throw new Error("already falling");
        }
      }        
    }

      this.boardString[0][1]=block 
  }


  tick(){
    outerLoop: for (let i = 0; i < this.boardString.length; i++) {
      for (let j = 0; j < this.boardString[i].length; j++) {
        if(this.boardString[i][j] != "." ){
          let tempBlock = this.boardString[i][j]
          this.boardString[i][j]='.'
          this.boardString[i+1][j]=tempBlock
          break outerLoop
        }
      }        
    }

  }
}
