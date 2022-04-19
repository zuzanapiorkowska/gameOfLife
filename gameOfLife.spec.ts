import { Board } from "./Board";

describe("Game Of Life", () => {
  describe("Board", () => {
    const boardOfDeads: (0 | 1)[][] = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    it("shows all dead when all dead are given", () => {
      const board = new Board(boardOfDeads);

      expect(board.tick()).toEqual(boardOfDeads);
    });
    it("shows all dead when 1 alive is given", () => {
      const boardWithOneAlive: (0 | 1)[][] = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const board = new Board(boardWithOneAlive);

      expect(board.tick()).toEqual(boardOfDeads);
    });
  });
});
