const isDividedByFour = (year: number): boolean => year % 4 === 0;
const isDividedByOneHundred = (year: number): boolean => year % 100 === 0;
const isDividedByFourHundreds = (year: number): boolean => year % 400 === 0;

function isLeapYear(year: number) {
  return (isDividedByFour(year) && !isDividedByOneHundred(year))
    || isDividedByFourHundreds(year);
}

export default isLeapYear
