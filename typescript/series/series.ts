class Series {
  private readonly _digits: number[];

  constructor(private series: string) {
    this._digits = [...series].map(number => Number(number));
  }

  get digits(): number[] {
    return this._digits;
  }

  slices(chunkSize: number) {
    if (chunkSize > this._digits.length) {
      throw new Error();
    }

    const result = [];

    for (let i = 0; i < this._digits.length - chunkSize + 1; i++) {
      result.push(this._digits.slice(i, i + chunkSize));
    }

    return result;
  }
}

export default Series;
