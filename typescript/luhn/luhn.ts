class Luhn {
  private static digitsRegexp = /^\d+$/;

  static valid(luhnString: string): boolean {
    const numberToVerify = luhnString.replace(/\s/g, '');

    if (!Luhn.onlyDigit(numberToVerify) || numberToVerify.length < 2) {
      return false;
    }

    const sumOfNumbers = [...numberToVerify]
      .reduce((sum, stringNumber, index) => {
        const number = Number(stringNumber);
        if (index % 2 === 0) {
          sum += number;
        } else {
          const numberMultiplyBy2 = number * 2;
          sum += numberMultiplyBy2 > 9 ? numberMultiplyBy2 - 9 : numberMultiplyBy2;
        }

        return sum;
      }, 0);

    return sumOfNumbers % 10 === 0;
  }

  private static onlyDigit(string: string): boolean {
    return this.digitsRegexp.test(string);
  }
}

export default Luhn;
