class Matrix {
  private readonly _rows: number[][];
  private readonly _columns: number[][] = [[]];

  constructor(matrix: string) {
    const rows = matrix.split('\n');
    this._rows = rows.map(row => {
      return row.split(' ')
        .map(Number);
    });

    this._columns = this._rows.reduce((prev, next) => next.map((_item, index) =>
      (prev[index] || [] as number[]).concat(next[index])
    ), [[]] as number[][]);
  }

  get rows(): number[][] {
    return [...this._rows];
  }

  get columns(): number[][] {
    return [...this._columns];
  }
}

export default Matrix
