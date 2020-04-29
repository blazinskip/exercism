type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

class SpaceAge {
  private static earthYearInSeconds = 31557600;
  private static planetsYearScale: { [key in Planet]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  constructor(private readonly _seconds: number) {
  }

  get seconds(): number {
    return this._seconds;
  }

  onEarth(): number {
    return this.calculateYearsOnPlanet('earth');
  }

  onMercury(): number {
    return this.calculateYearsOnPlanet('mercury');
  }

  onVenus(): number {
    return this.calculateYearsOnPlanet('venus');
  }

  onMars(): number {
    return this.calculateYearsOnPlanet('mars');
  }

  onJupiter(): number {
    return this.calculateYearsOnPlanet('jupiter');
  }

  onSaturn(): number {
    return this.calculateYearsOnPlanet('saturn');
  }

  onUranus(): number {
    return this.calculateYearsOnPlanet('uranus');
  }

  onNeptune(): number {
    return this.calculateYearsOnPlanet('neptune');
  }

  private calculateYearsOnPlanet(planet: Planet): number {
    const yearsOnPlanet = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale[planet];
    return Number(yearsOnPlanet.toFixed(2));
  }

  private calculateYearsOnEarth(): number {
    return this.seconds / SpaceAge.earthYearInSeconds;
  }
}

export default SpaceAge;
