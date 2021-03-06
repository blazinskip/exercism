class Clock {
  private static numberOfMinutesInOneHour = 60;
  private static numberOfHoursInOneDay = 24;

  private readonly hours: number;
  private readonly minutes: number;

  constructor(hours: number, minutes: number = 0) {
    const x = minutes / Clock.numberOfMinutesInOneHour;
    let hoursToAddFromMinutes = x > 0 ? Math.floor(x) : Math.ceil(x);
    this.minutes = minutes % Clock.numberOfMinutesInOneHour;

    if (this.minutes < 0) {
      hoursToAddFromMinutes--;
      this.minutes = Clock.numberOfMinutesInOneHour + this.minutes;
    }

    this.hours = (hoursToAddFromMinutes + hours) % Clock.numberOfHoursInOneDay;

    if (this.hours < 0) {
      this.hours = Clock.numberOfHoursInOneDay + this.hours;
    }
  }

  plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  equals(clock: Clock): boolean {
    return this.hours === clock.hours
      && this.minutes === clock.minutes;
  }

  toString(): string {
    return `${Clock.padZero(this.hours)}:${Clock.padZero(this.minutes)}`;
  }

  private static padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }
}

export default Clock;
