type TriangleKind = 'equilateral' | 'isosceles' | 'scalene';

export default class Triangle {
  private readonly sortedSides: number[];

  constructor(...sides: number[]) {
    this.sortedSides = sides.sort((a, b) => a - b);
  }

  kind(): TriangleKind {
    const [a, b, c] = this.sortedSides;

    if (a + b <= c) {
      throw new Error('Illegal triangle');
    }

    if (a === c) {
      return 'equilateral';
    }

    if (a === b || b === c) {
      return 'isosceles';
    }

    return 'scalene';
  }

  private static isNotTriangle(a: number, b: number, c: number) {
    return a + b <= c || a + c <= b || b + c <= a;
  }
}
