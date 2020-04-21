class DiffieHellman {
  constructor(private p: number, private g: number) {
    if (p < 1 || g > p) {
      throw new Error('Arguments out of range');
    }

    if (!DiffieHellman.isPrime(p) || !DiffieHellman.isPrime(g)) {
      throw new Error('Arguments are not prime');
    }
  }

  getPublicKeyFromPrivateKey(privateKey: number) {
    if (privateKey <= 1) {
      throw new Error('Private key must be greater than 1');
    }

    if (privateKey >= this.p) {
      throw new Error('Private key cannot be greater than or equal to modulus parameter p');
    }

    return this.g ** privateKey % this.p;
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return publicKey ** privateKey % this.p;
  }

  private static isPrime(numberToCheck: number): boolean {
    for (let i = 2, s = Math.sqrt(numberToCheck); i <= s; i++) {
      if (numberToCheck % i === 0) {
        return false;
      }
    }
    return numberToCheck > 1;
  }
}

export default DiffieHellman;

