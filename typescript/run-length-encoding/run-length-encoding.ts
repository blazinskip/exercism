class RunLengthEncoding {
  static encode(textToEncode: string): string {
    const characters = [...textToEncode];

    let result = '';
    for (let i = 0; i < characters.length; i++) {
      let count = 1;
      while (i < characters.length -1 && characters[i] === characters[i + 1]) {
        count++;
        i++;
      }

      result = `${result}${count > 1 ? count : ''}${characters[i]}`
    }

    return result;
  }

  static decode(_textToDecode: string): string {
    return '';
  }
}

export default RunLengthEncoding;
