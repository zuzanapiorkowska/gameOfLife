import { Cell } from "./Cell";
import { Board } from "./Board";

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
  });

  describe(Cell.name, ()=> {
      it("alive cell dies when has no neighbours", ()=> {
          //when 
          const cell = new Cell(1, 0);
          expect(cell.getState()).toEqual(0);
      });
      it("alive cell dies when has no neighbours", ()=> {
          //when 
          const cell = new Cell(1, 0);
          expect(cell.getState()).toEqual(0);
      });
  })
});
