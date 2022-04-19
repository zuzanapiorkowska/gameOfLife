import { Board } from "./Board";

describe("Game Of Life", () => {
  describe("Board", () => {
    it("shows all dead when all dead are given", () => {
      const boardOfDeads: (0 | 1)[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const board = new Board(boardOfDeads);

      expect(board.tick()).toEqual(boardOfDeads);
    });
  });
});
