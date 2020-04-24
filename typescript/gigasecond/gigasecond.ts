class Gigasecond {
  private static oneGigaSecond = 1000000000;
  private static oneMillisecond = 1000;
  private static thousandGigaMillisecond = Gigasecond.oneGigaSecond * Gigasecond.oneMillisecond;

  private readonly dateWithAddedOneGigaSecond: Date;

  constructor(date: Date) {
    this.dateWithAddedOneGigaSecond = new Date(date.getTime() + Gigasecond.thousandGigaMillisecond);
  }

  date(): Date {
    return this.dateWithAddedOneGigaSecond;
  }
}

export default Gigasecond;
