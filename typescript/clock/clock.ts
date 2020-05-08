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
    return this.hours === clock.hours && this.minutes === clock.minutes;
  }

  toString(): string {
    const hours = this.hours > 9 ? `${this.hours}` : `0${this.hours}`;
    const minutes = this.minutes > 9 ? `${this.minutes}` : `0${this.minutes}`;

    return `${hours}:${minutes}`;
  }
}

export default Clock;
