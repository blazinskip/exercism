class ReverseString {
  static reverse(sentence: string): string {
    return [...sentence].reverse().join('');
  }
}

export default ReverseString
