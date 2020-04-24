class Gigasecond {
  private static gigasecond = 1000000000;
  private static oneMillisecond = 1000;

  private readonly dateWithAddedGigasecond: Date;

  constructor(date: Date) {
    this.dateWithAddedGigasecond = new Date(date.getTime() + Gigasecond.gigasecond * Gigasecond.oneMillisecond);
  }

  date(): Date {
    return this.dateWithAddedGigasecond;
  }
}

export default Gigasecond;
