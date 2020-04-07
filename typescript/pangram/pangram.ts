class Pangram {
  private static uniqueCharactersRegexp = /([a-z])(?!.*\1)/g;
  private static numberOfExpectedUniqueCharacters = 26;

  constructor(private readonly sentence: string) {
  }

  isPangram(): boolean {
    const lowerCaseSentence = this.sentence.toLowerCase();
    return (lowerCaseSentence.match(Pangram.uniqueCharactersRegexp) || []).length === Pangram.numberOfExpectedUniqueCharacters;
  }
}

export default Pangram;
