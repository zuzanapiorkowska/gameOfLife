export class Board {
  constructor(private board: (0 | 1)[][]) {}

  public tick() {
    return this.board;
  }
}
