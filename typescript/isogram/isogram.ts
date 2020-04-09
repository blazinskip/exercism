class Isogram {
  static isIsogram(word: string) {
      const onlyLetters = word.toLowerCase()
        .replace(/[\W\d_]/g, '');
      return new Set(onlyLetters).size === onlyLetters.length;
  }
}

export default Isogram
