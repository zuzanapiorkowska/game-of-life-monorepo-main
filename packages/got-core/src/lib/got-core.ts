export class Cell {
  constructor(private state: number, private neighborsSum?: number) {}

  public setNextState() {
    if (this.state === 1 && this.neighborsSum === 2) return 1
    if (this.neighborsSum === 3) return 1;
    return 0;
  }
}

export class Board {
  constructor(private board: (0 | 1)[][]) {}

  public tick() {
    this.board = this.board.map((row: number[], rowIdx: number) => {
      return row.map((__, cellIdx: number) => {
        const neighbours = [
          this.getCellContent(rowIdx - 1, cellIdx - 1),
          this.getCellContent(rowIdx - 1, cellIdx),
          this.getCellContent(rowIdx - 1, cellIdx + 1),
          this.getCellContent(rowIdx, cellIdx - 1),
          this.getCellContent(rowIdx, cellIdx + 1),
          this.getCellContent(rowIdx + 1, cellIdx - 1),
          this.getCellContent(rowIdx + 1, cellIdx),
          this.getCellContent(rowIdx + 1, cellIdx + 1),
        ];
        const neighborsSum = neighbours.reduce((sum, a) => sum + a, 0);
        const cell = new Cell(this.getCellContent(rowIdx, cellIdx), neighborsSum);
        return cell.setNextState();
      });
    });
    return this.board;
  }
  
  private getCellContent(rowIndex: number, cellIndex: number) {
    return (this.board[rowIndex] && this.board[rowIndex][cellIndex] ? 1 : 0);
  }
}

