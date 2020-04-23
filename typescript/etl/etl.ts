function transform(oldValue: { [key: string]: string[]; }): { [key: string]: number; } {
  let result: { [key: string]: number; } = {};
  for (const [point, letters] of Object.entries(oldValue)) {
    const newModelForPoint = letters
      .reduce((acc, letter) => ({ ...acc, [letter.toLowerCase()]: Number(point) }), {});

    result = { ...result, ...newModelForPoint };
  }

  return result;
}

export default transform;
