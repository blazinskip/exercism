export default class SecretHandshake {
  private readonly handshakeCommands: string[] = [];

  constructor(private readonly numberInDecimal: number) {
    let binary = SecretHandshake.toBinaryNumber(numberInDecimal);

    if (binary % 10 === 1) {
      binary = binary - 1;
      this.handshakeCommands.push('wink');
    }

    if (binary % 100 === 10) {
      binary = binary - 10;
      this.handshakeCommands.push('double blink');
    }

    if (binary % 1000 === 100) {
      binary = binary - 100;
      this.handshakeCommands.push('close your eyes');
    }

    if (binary % 10000 === 1000) {
      binary = binary - 1000;
      this.handshakeCommands.push('jump');
    }

    if (binary % 100000 === 10000) {
      this.handshakeCommands = this.handshakeCommands.reverse();
    }
  }

  commands() {
    return this.handshakeCommands;
  }

  private static toBinaryNumber(numberInDecimal: number): number {
    return Number(numberInDecimal.toString(2));
  }
}
