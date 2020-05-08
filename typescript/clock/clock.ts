class Clock {
  private readonly hours: number;
  private readonly minutes: number;

  constructor(hours: number, minutes: number = 0) {
    const x = minutes / 60;
    let hoursToAddFromMinutes = x > 0 ? Math.floor(x) : Math.ceil(x);
    this.minutes = minutes % 60;

    if (this.minutes < 0) {
      hoursToAddFromMinutes--;
      this.minutes = 60 + this.minutes;
    }

    const hoursModulo = (hoursToAddFromMinutes + hours) % 24;
    this.hours = hoursModulo < 0 ? 24 + hoursModulo : hoursModulo;
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
