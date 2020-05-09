export default class FlattenArray {
  static flatten(array: any[]): number[] {
    let stack = [...array];
    let result: number[] = [];

    while (stack.length > 0) {
      const element = stack.pop();

      if (Array.isArray(element)) {
        stack.push(...element);
      } else if (typeof(element) === 'number') {
        result.push(element);
      }
    }

    return result.reverse();
  }
}
