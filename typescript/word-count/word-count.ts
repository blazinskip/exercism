class Words {
  count(sentence: string): Map<string, number> {
    const result = new Map();
    const words = sentence
      .trimStart()
      .trimEnd()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .split(' ');

    for (const word of words) {
      if (result.has(word)) {
        const currentValueForWord = result.get(word);
        result.set(word, currentValueForWord + 1);
      } else {
        result.set(word, 1);
      }
    }

    return result;
  }
}

export default Words;
