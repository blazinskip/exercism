class Series {
  private readonly _digits: number[];

  constructor(private series: string) {
    this._digits = [...series].map(number => Number(number));
  }

  get digits(): number[] {
    return this._digits;
  }

  slices(numberOfSlices: number): [number[]] {
    return [[numberOfSlices]];
  }
}

export default Series;
