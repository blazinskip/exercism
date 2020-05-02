type Proteins = 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

type Codons = 'AUG'
  | 'UUU'
  | 'UUC'
  | 'UUA'
  | 'UUG'
  | 'UCU'
  | 'UCC'
  | 'UCA'
  | 'UCG'
  | 'UAU'
  | 'UAC'
  | 'UGU'
  | 'UGC'
  | 'UGG'
  | 'UAA'
  | 'UAG'
  | 'UGA';

type TerminatingCommand = 'STOP';

class ProteinTranslation {
  private static codonsToProtein: { [key in Codons]: Proteins | TerminatingCommand } = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  }

  static proteins(rnaSequence: string): Proteins[] {
    const codons = (rnaSequence.match(/.{1,3}/g) || []) as Codons[];
    const result: Proteins[] = [];

    for (let codon of codons) {
      if (ProteinTranslation.codonsToProtein[codon] === 'STOP') {
        break;
      }

      result.push(ProteinTranslation.codonsToProtein[codon] as Proteins);
    }

    return result;
  }
}

export default ProteinTranslation

