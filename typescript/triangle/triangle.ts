type TriangleKind = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  private readonly aSide: number;
  private readonly bSide: number;
  private readonly cSide: number;

  constructor(...sides: number[]) {
    const [a, b, c] = sides;
    this.aSide = a;
    this.bSide = b;
    this.cSide = c;
  }

  kind(): TriangleKind {
    if (Triangle.isNotTriangle(this.aSide, this.bSide, this.cSide)) {
      throw new Error('is not a triangle');
    }

    if (this.aSide === this.bSide && this.bSide === this.cSide) {
      return 'equilateral';
    }

    if (this.aSide === this.bSide || this.aSide === this.cSide || this.bSide === this.cSide) {
      return 'isosceles';
    }

    return 'scalene';
  }

  private static isNotTriangle(a: number, b: number, c: number) {
    return a + b <= c || a + c <= b || b + c <= a;
  }
}
