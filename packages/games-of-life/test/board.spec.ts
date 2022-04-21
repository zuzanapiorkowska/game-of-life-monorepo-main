import { Board } from '../src/Boards';

describe('GOL', () => {
  let game = new Board();
  beforeEach(() => {
    game = new Board();
  });
  it('should create new instance of class', () => {
    expect(game).toBeTruthy;
  });

  it('should calculate number o alive neighbors', () => {
    const board = {
      id: '1',
      array: [
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, 0],
      ],
    };
    game.createCustomBoard(board);
    const numberOfAliveNeighbors = game.getAllAliveNeighbors(0, 0, board.array);
    expect(numberOfAliveNeighbors).toBe(1);
  });

  it('should calculate new board', () => {
    const board = {
      id: '1',
      array: [
        [1, 1, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
    };

    const boardAfterTick = {
      id: '1',
      array: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ],
    };

    game.createCustomBoard(board);
    game.tick('1');
    expect(game.getBoard('1')).toEqual(boardAfterTick.array);
  });

  it('should calculate new board', () => {
    const board = {
      id: '1',
      array: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0],
      ],
    };
    const boardAfterTick = {
      id: '1',
      array: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1],
      ],
    };
    game.createCustomBoard(board);
    game.tick('1');
    expect(game.getBoard('1')).toEqual(boardAfterTick.array);
  });
});
