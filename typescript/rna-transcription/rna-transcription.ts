type Nucleotide = 'G'
  | 'C'
  | 'T'
  | 'A';

class Transcriptor {
  private static dnaToRnaTranslationMap: { [key in Nucleotide]: string } = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  toRna(dnaStrand: string): string {
    return [...dnaStrand]
      .map(Transcriptor.translateNucleotide)
      .join('');
  }

  private static translateNucleotide(input: string): string | void {
    return Transcriptor.dnaToRnaTranslationMap[input as Nucleotide] || Transcriptor.raiseInvalidInputError();
  }

  private static raiseInvalidInputError(): void {
    throw new Error('Invalid input DNA.');
  }
}

export default Transcriptor
