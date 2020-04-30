export default class Acronym {
  public static parse(phrase: string): string {
    return phrase
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(/[ -]+/)
      .map(word => word[0].toUpperCase())
      .join('');
  }
}
