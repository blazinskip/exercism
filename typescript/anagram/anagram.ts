class Anagram {
  private readonly word: string;
  private readonly sortedCharactersForWord: string;

  constructor(word: string) {
    this.word = word.toLowerCase();
    this.sortedCharactersForWord = Anagram.createSortedCharactersForWord(this.word);
  }

  matches(...words: string[]): string[] {
    const isAnagram = (wordForCheck: string): boolean => wordForCheck.toLowerCase() !== this.word
      && Anagram.createSortedCharactersForWord(wordForCheck) === this.sortedCharactersForWord;

    return words.filter(isAnagram);
  }

  private static createSortedCharactersForWord(word: string): string {
    return [...word.toLowerCase()].sort().join('');
  }
}

export default Anagram;
