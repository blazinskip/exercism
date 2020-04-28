class RunLengthEncoding {
  static encode(textToEncode: string): string {
    return textToEncode.replace(/(.)\1+/g, substring => substring.length + substring[0]);
  }

  static decode(textToDecode: string): string {
    const characters = [...textToDecode];

    let result = '';
    for (let i = 0; i < characters.length; i++) {
      let currentCharacter = characters[i];

      let numberFromCurrentCharacter = Number(currentCharacter); // Number(' ') === 0
      let occurrenceCounterString = '';
      while (i < characters.length - 1 && !isNaN(numberFromCurrentCharacter) && numberFromCurrentCharacter !== 0) {
        occurrenceCounterString = `${occurrenceCounterString}${numberFromCurrentCharacter}`;
        i++;
        currentCharacter = characters[i];
        numberFromCurrentCharacter = Number(currentCharacter);
      }

      const counter = Number(occurrenceCounterString ? occurrenceCounterString : 1);

      const joined = Array.from(Array(counter))
        .reduce((acc, _current) => `${acc}${currentCharacter}`, '');

      result = `${result}${joined}`;
    }


    return result;
  }
}

export default RunLengthEncoding;
