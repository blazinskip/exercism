export default class SecretHandshake {
  private static readonly actionsMap: Map<number, string> = new Map([
    [0b1, "wink"],
    [0b10, "double blink"],
    [0b100, "close your eyes"],
    [0b1000, "jump"]
  ]);

  private readonly handshakeCommands: string[] = [];

  constructor(private readonly numberInDecimal: number) {
    const commands = [...SecretHandshake.actionsMap]
      .filter(([command]) => this.numberInDecimal & command)
      .reduce<string[]>((result, [, cmd]) => [...result, cmd], []);

    this.handshakeCommands = this.numberInDecimal & 0b10000 ? commands.reverse() : commands;
  }

  commands() {
    return this.handshakeCommands;
  }
}
