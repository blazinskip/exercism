class RunLengthEncoding {
  static encode(textToEncode: string): string {
    const characters = [...textToEncode];

    let result = '';
    for (let i = 0; i < characters.length; i++) {
      let count = 1;
      while (i < characters.length - 1 && characters[i] === characters[i + 1]) {
        count++;
        i++;
      }

      result = `${result}${count > 1 ? count : ''}${characters[i]}`
    }

    return result;
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
