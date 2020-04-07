class Pangram {
  private static notLettersRegexp = /[^a-zA-Z]/g;
  private static numberOfExpectedUniqueCharacters = 26;

  constructor(private readonly sentence: string) {
  }

  isPangram(): boolean {
    const lowerCaseSentence = this.sentence.toLowerCase();
    const sentenceWithOnlyLetters = lowerCaseSentence.replace(Pangram.notLettersRegexp, "");
    return new Set(sentenceWithOnlyLetters).size === Pangram.numberOfExpectedUniqueCharacters;
  }
}

export default Pangram;
