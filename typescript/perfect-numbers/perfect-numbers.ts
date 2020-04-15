export default class PerfectNumbers {
  static classify(number: number): 'perfect' | 'abundant' | 'deficient' {
    if (number < 1) {
      throw new Error("Classification is only possible for natural numbers.");
    }

    const aliquotSum = this.calculateAliquotSum(number);

    if (aliquotSum > number) {
      return 'abundant';
    }

    if (aliquotSum < number) {
      return 'deficient';
    }

    return 'perfect';
  }

  static calculateAliquotSum(number: number): number {
    let sum = 0;

    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }

    return sum;
  }
}
