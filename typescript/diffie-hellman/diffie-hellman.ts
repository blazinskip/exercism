class DiffieHellman {
  constructor(private p: number, private g: number) {
    if (!DiffieHellman.isPrime(p) || !DiffieHellman.isPrime(g)) {
      throw new Error();
    }
  }

  getPublicKeyFromPrivateKey(privateKey: number) {
    if (privateKey <= 1 || privateKey === this.p || privateKey > this.p) {
      throw new Error();
    }

    return Math.pow(this.g, privateKey) % this.p;
  }

  getSharedSecret(privateKey: number, publicKey: number): number {
    return Math.pow(publicKey, privateKey) % this.p;
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

