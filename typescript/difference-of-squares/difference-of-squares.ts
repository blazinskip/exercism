class Squares {
  private readonly _squareOfSum: number;
  private readonly _sumOfSquares: number;
  private readonly _difference: number;

  constructor(number: number) {
    const rangeFromOneToNumber = [...Array(number).keys()].map(i => i + 1);
    this._squareOfSum = Squares.sum(rangeFromOneToNumber) ** 2;
    this._sumOfSquares = Squares.sum(rangeFromOneToNumber.map(number => number ** 2));
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

  private static sum(numbers: number[]): number {
    return numbers.reduce((sum: number, value: number) => sum + value, 0);
  }
}

export default Squares;
