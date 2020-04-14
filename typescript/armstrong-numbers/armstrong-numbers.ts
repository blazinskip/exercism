class ArmstrongNumbers {
  static isArmstrongNumber(numberToCheck: number): boolean {
    const sumOfDigitsPowers = numberToCheck.toString()
      .split('')
      .reduce((sum, currentValue, _index, array) => sum + Math.pow(Number(currentValue), array.length), 0);
    return sumOfDigitsPowers === numberToCheck;
  }
}

export default ArmstrongNumbers;
