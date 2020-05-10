type nucleotide = 'A' | 'C' | 'G' | 'T';

type nucleotideCountResult = {
  readonly A: number,
  readonly C: number,
  readonly G: number,
  readonly T: number
}

class NucleotideCount {
  private static initResult: nucleotideCountResult = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  };

  static nucleotideCounts(dna: string): nucleotideCountResult {
    return [...dna]
      .reduce((result, nucleotideFromDnaStrand: unknown) => {
        const nucleotide = nucleotideFromDnaStrand as nucleotide;
        const nucleotideCounter = result[nucleotide];

        if (nucleotideCounter === undefined) {
          throw new Error('Invalid nucleotide in strand');
        }

        return {
          ...result,
          [nucleotide]: nucleotideCounter + 1
        };
      }, NucleotideCount.initResult);
  }
}

export default NucleotideCount
