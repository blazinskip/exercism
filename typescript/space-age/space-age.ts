class SpaceAge {
  private static earthYearInSeconds = 31557600;
  private static planetsYearScale = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    naptune: 164.79132,
  };

  constructor(public seconds: number) {
  }

  onEarth(): number {
    const yearsOnEarth = this.calculateYearsOnEarth();
    return Number(yearsOnEarth.toFixed(2));
  }

  onMercury(): number {
    const yearsOnMercury = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.mercury;
    return Number(yearsOnMercury.toFixed(2));
  }

  onVenus(): number {
    const yearsOnVenus = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.venus;
    return Number(yearsOnVenus.toFixed(2));
  }

  onMars(): number {
    const yearsOnMars = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.mars;
    return Number(yearsOnMars.toFixed(2));
  }

  onJupiter(): number {
    const yearsOnMars = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.jupiter;
    return Number(yearsOnMars.toFixed(2));
  }

  onSaturn(): number {
    const yearsOnMars = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.saturn;
    return Number(yearsOnMars.toFixed(2));
  }

  onUranus(): number {
    const yearsOnMars = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.uranus;
    return Number(yearsOnMars.toFixed(2));
  }

  onNeptune(): number {
    const yearsOnMars = this.calculateYearsOnEarth() / SpaceAge.planetsYearScale.naptune;
    return Number(yearsOnMars.toFixed(2));
  }

  private calculateYearsOnEarth(): number {
    return this.seconds / SpaceAge.earthYearInSeconds;
  }
}

export default SpaceAge;
