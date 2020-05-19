export default class RobotName {
  private static currentNames: string[] = [];
  private static letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private static digits = '0123456789';

  private _name = '';

  constructor() {
    this._name = RobotName.generateName();
  }

  get name(): string {
    return this._name;
  }

  resetName(): void {
    this._name = RobotName.generateName();
  }

  private static generateName(): string {
    let name = RobotName.buildRobotName();

    while (RobotName.currentNames.includes(name)) {
      name = RobotName.buildRobotName();
    }

    this.currentNames = [...this.currentNames, name];

    return name;
  }

  private static buildRobotName() {
    return [
      ...RobotName.generateNthRandomCharactersFromString(2, RobotName.letters),
      ...RobotName.generateNthRandomCharactersFromString(3, RobotName.digits)
    ].join('');
  }

  private static generateNthRandomCharactersFromString(numberOfRandomElements: number, stringOfCharacters: string): string[] {
    return (Array.from(Array(numberOfRandomElements)))
      .map(_currentValue => stringOfCharacters.charAt(Math.random() * stringOfCharacters.length));
  }
}
