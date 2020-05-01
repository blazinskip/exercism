class Hamming {
  compute(firstDnaStrand: string, secondDnaStrand: string): number {
    if (firstDnaStrand.length !== secondDnaStrand.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    return [...firstDnaStrand]
      .reduce((sum, letter, index) => letter === secondDnaStrand.charAt(index) ? sum : sum + 1, 0);
  }
}

export default Hamming;
