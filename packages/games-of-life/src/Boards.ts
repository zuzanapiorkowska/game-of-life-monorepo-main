import { Cell } from './Cell';
import { BoardDto } from './Dto/BoardDto';

export class Board {
  board: number[][] = [];
  boards: {
    [id: string]: number[][];
  } = {};

  createCustomBoard(board: BoardDto) {
    this.boards[board.id] = board.array;
  }

  getBoard(id: string): number[][] {
    return this.boards[id];
  }

  getAllAliveNeighbors(x: number, y: number, board: number[][]) {
    let aliveNeighbors = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (j < 0 || j + 1 > board.length) continue;
        if (i < 0 || i + 1 > board.length) continue;
        if (i === x && j === y) continue;
        if (board[i][j] === 1) aliveNeighbors++;
      }
    }
    return aliveNeighbors;
  }

  tick(id: string) {
    return (this.boards[id] = this.boards[id].map((row, i) => {
      return row.map((col, j) => {
        const n = this.getAllAliveNeighbors(i, j, this.boards[id]);
        const cell = new Cell(this.boards[id][i][j], n).tick().getState();
        return cell;
      });
    }));
  }
}
