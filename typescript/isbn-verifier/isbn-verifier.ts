export default class Isbn {
  private readonly valid: boolean = true;

  constructor(isbn: string) {
    const isbnWithoutHyphens = isbn.replace(/-/g, "");

    const xIndexOf = isbnWithoutHyphens.indexOf('X');

    if (xIndexOf !== -1 && xIndexOf !== isbnWithoutHyphens.length - 1) {
      this.valid = false;
      return;
    }

    if (!isbnWithoutHyphens.match("^[X0-9]+$")) {
      this.valid = false;
      return;
    }

    let multiplier = 10;
    const sum = [...isbnWithoutHyphens].reduce((sum, currentNumber) => {
      const number = Number(currentNumber);
      if (!isNaN(number)) {
        sum = sum + (multiplier * number);
      } else {
        sum = sum + (multiplier * 10);
      }
      multiplier--;
      return sum;
    }, 0);

    this.valid = sum % 11 === 0;
  }

  isValid() {
    return this.valid;
  }
}
