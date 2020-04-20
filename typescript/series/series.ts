class Series {
  private readonly _digits: number[];

  constructor(private series: string) {
    this._digits = [...series].map(number => Number(number));
  }

  get digits(): number[] {
    return this._digits;
  }

  slices(chunkSize: number): number[][] {
    if (chunkSize > this._digits.length) {
      throw new Error();
    }

    const digitsCopy = [...this._digits];
    const result: number[][] = [];

    while (chunkSize <= digitsCopy.length) {
      result.push(digitsCopy.slice(0, chunkSize));
      digitsCopy.shift();
    }

    return result;
  }
}

export default Series;
