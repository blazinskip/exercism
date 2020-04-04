type ResistorColors =
  'black'
  | 'brown'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'violet'
  | 'grey'
  | 'white';

export class ResistorColor {
  private readonly colors: ResistorColors[];

  private readonly colorsMaps: {[key in ResistorColors]: number} = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  constructor(colors: ResistorColors[]) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    this.colors = colors;
  }

  value(): number {
    const resistorValue = this.colors.slice(0, 2)
      .map((color) => this.colorsMaps[color])
      .join('');

    return Number(resistorValue);
  }
}
