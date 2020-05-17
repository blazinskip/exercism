export default class Isbn {
  private readonly valid: boolean = true;

  constructor(isbn: string) {
    const normalizedNumber = Isbn.normalizeNumber(isbn);

    if (Isbn.isValidNumber(normalizedNumber)) {
      const checksum = Isbn.calculateChecksum(normalizedNumber);
      this.valid = checksum % 11 === 0;
    } else {
      this.valid = false;
    }
  }

  isValid() {
    return this.valid;
  }

  private static calculateChecksum(normalizedNumber: string): number {
    let multiplier = 10;
    return [...normalizedNumber].reduce((sum, digit) => {
      const value = Isbn.digitToValue(digit);
      sum += value * multiplier;
      multiplier--;
      return sum;
    }, 0);
  }

  private static digitToValue(digit: string): number {
    return digit === 'X' ? 10 : parseInt(digit, 10);
  }

  private static normalizeNumber(isbn: string): string {
    return isbn.replace(/-/g, "");
  }

  private static isValidNumber(normalizedNumber: string): boolean {
    return /^\d{9}[\dX]$/.test(normalizedNumber);
  }
}
