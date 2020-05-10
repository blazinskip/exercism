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

  private static acceptedNucleotides: nucleotide[] = ['A', 'C', 'G', 'T'];

  static nucleotideCounts(dna: string): nucleotideCountResult {
    return [...dna]
      .reduce((result, nucleotideFromDnaStrand: unknown) => {
        const nucleotide = nucleotideFromDnaStrand as nucleotide;
        if (NucleotideCount.acceptedNucleotides.includes(nucleotide)) {
          const nucleotideOccurrences = result[nucleotide] + 1;

          return {
            ...result,
            [nucleotide]: nucleotideOccurrences
          };
        }

        throw new Error('Invalid nucleotide in strand');
      }, NucleotideCount.initResult);
  }
}

export default NucleotideCount
