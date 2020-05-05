export default function calculatePrimeFactors(number: number): number[] {
  const primeFactors = [];
  while (number % 2 === 0) {
    primeFactors.push(2);
    number = number / 2;
  }

  const sqrtNum = Math.sqrt(number);
  for (let i = 3; i <= sqrtNum; i++) {
    while (number % i === 0) {
      primeFactors.push(i);
      number = number / i;
    }
  }

  if (number > 2) {
    primeFactors.push(number);
  }

  return primeFactors;
};
