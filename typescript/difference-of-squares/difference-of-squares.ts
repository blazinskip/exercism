class Squares {
  private readonly _squareOfSum: number;
  private readonly _sumOfSquares: number;
  private readonly _difference: number;

  constructor(number: number) {
    const rangeFromOneToNumber = [...Array(number).keys()].map(i => i + 1);
    this._squareOfSum = rangeFromOneToNumber
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0) ** 2;
    this._sumOfSquares = rangeFromOneToNumber.map(number => number ** 2)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    this._difference = this._squareOfSum - this._sumOfSquares;
  }

  get squareOfSum(): number {
    return this._squareOfSum;
  }

  get sumOfSquares(): number {
    return this._sumOfSquares;
  }

  get difference(): number {
    return this._difference;
  }
}

export default Squares;
