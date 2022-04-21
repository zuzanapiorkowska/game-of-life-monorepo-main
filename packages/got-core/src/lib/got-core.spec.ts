import { Cell } from "./got-core";
import { Board } from "./got-core";

describe("Game Of Life", () => {
  describe("Board", () => {
    const boardOfDeads: (0 | 1)[][] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    it("returns empty board when all dead are given", () => {
      //when
      const board = new Board(boardOfDeads);
      //then
      expect(board.tick()).toEqual(boardOfDeads);
    });
    it("returns empty board when 1 alive cell without neighbors is given", () => {
      //given
      const boardWithOneAlive: (0 | 1)[][] = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      //when
      const board = new Board(boardWithOneAlive);
      //then
      expect(board.tick()).toEqual(boardOfDeads);
    });
    it("keeps alive cells, that have 2 neighbours", () => {
      //given
      const before: (0 | 1)[][] = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
      const after: (0 | 1)[][] = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      //when
      const board = new Board(before);
      //then
      expect(board.tick()).toEqual(after);
    });
    it("keeps alive cells, that have 3 neighbours", () => {
      //given
      const before: (0 | 1)[][] = [
        [1, 0, 0],
        [0, 1, 1],
        [0, 0, 1],
      ];
      const after: (0 | 1)[][] = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 1],
      ];
      //when
      const board = new Board(before);
      //then
      expect(board.tick()).toEqual(after);
    });
    it("make alive dead cells, that have 3 neighbours", () => {
      //given
      const before: (0 | 1)[][] = [
        [1, 0, 1],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const after: (0 | 1)[][] = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      //when
      const board = new Board(before);
      //then
      expect(board.tick()).toEqual(after);
    });
    it("kills alive cells, that have less than 2 neighbours", () => {
      //given
      const before: (0 | 1)[][] = [
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      //when
      const board = new Board(before);
      //then
      expect(board.tick()).toEqual(boardOfDeads);
    });
  });
    it("kills cells, that have more than 3 neighbours", () => {
      //given
      const before: (0 | 1)[][] = [
        [1, 1, 1],
        [0, 1, 1],
        [0, 0, 0],
      ];
      const after: (0 | 1)[][] = [
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
      ];
      //when
      const board = new Board(before);
      //then
      expect(board.tick()).toEqual(after);
    });
  });

  describe(Cell.name, ()=> {
      it("alive cell dies when has no neighbours", ()=> {
          //when 
          const cell = new Cell(1, 0);
          expect(cell.setNextState()).toEqual(0);
      });
      it("alive cell dies when has no neighbours", ()=> {
          //when 
          const cell = new Cell(1, 0);
          expect(cell.setNextState()).toEqual(0);
      });
      it("alive cell stays alive when has 3 neighbours", ()=> {
          //when 
          const cell = new Cell(1, 3);
          expect(cell.setNextState()).toEqual(1);
      });
      it("alive cell stays alive when has 2 neighbours", ()=> {
          //when 
          const cell = new Cell(1, 2)
          expect(cell.setNextState()).toEqual(1);
      });
      it("dead cell stays dead when has 2 neighbours", ()=> {
          //when 
          const cell = new Cell(0, 2)
          expect(cell.setNextState()).toEqual(0);
      });
      it("dead cell becomes alive when has 3 neighbours", ()=> {
          //when 
          const cell = new Cell(0, 3)
          expect(cell.setNextState()).toEqual(1);
      });
      it("alive cell dies when has less than 2 neighbors", ()=> {
          //when 
          const cell = new Cell(1, 1)
          expect(cell.setNextState()).toEqual(0);
      });
  });