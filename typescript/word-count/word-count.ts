class Words {
  count(sentence: string): Map<string, number> {
    return sentence
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce((map, word) => {
        const wordCounter = map.get(word) || 0;
        return map.set(word, wordCounter + 1);
      }, new Map<string, number>());
  }
}

export default Words;
