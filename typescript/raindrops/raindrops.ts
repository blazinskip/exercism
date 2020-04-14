type dividers = 3 | 5 | 7;

class Raindrops {
  private static numberStringMaps: { [key in dividers]: string } = {
    3: 'Pling',
    5: 'Plang',
    7: 'Plong',
  };

  convert(number: number): string {
    return Object.keys(Raindrops.numberStringMaps)
      .reduce((acc, key: unknown) => number % Number(key) === 0 ? acc + Raindrops.numberStringMaps[key as dividers] : acc, '') || number.toString();
  }
}

export default Raindrops;
