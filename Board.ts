export class Board {
  constructor(private board: (0 | 1)[][]) {}

  public tick() {
    return [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]
  }
}
