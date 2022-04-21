export class Cell {
  constructor(public state: 0 | 1 | number, private aliveNeighbors: number) {}

  getState() {
    return this.state;
  }

  tick() {
    if (this.aliveNeighbors === 3) {
      this.state = 1;
    } else if (this.aliveNeighbors === 2 && this.state === 1) {
      this.state = 1;
    } else {
      this.state = 0;
    }
    return this;
  }
}
