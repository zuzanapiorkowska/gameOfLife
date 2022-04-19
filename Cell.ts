export class Cell {
    constructor(private state: number, private neighborsSum: number) {}
  
    public getState() {
      if (this.neighborsSum === 3 || this.neighborsSum === 2 ) return 1;
      return 0;
    }
  }
  