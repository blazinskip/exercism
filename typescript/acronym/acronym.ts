export default class Acronym {
  public static parse(phrase: string): string {
    return phrase.replace(/(\w)[A-Z]*[a-z]*\W*/g, "$1").toUpperCase();
  }
}
