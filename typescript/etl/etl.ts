type OldRecord = { [key: string]: string[] }
type NewRecord = { [key: string]: number }

function transform(oldScores: OldRecord): NewRecord {
  let newScores: NewRecord = {};
  for (const [score, letters] of Object.entries(oldScores)) {
    const newRecordsForScore = letters
      .reduce((acc, letter) => ({ ...acc, [letter.toLowerCase()]: Number(score) }), {});

    newScores = { ...newScores, ...newRecordsForScore };
  }

  return newScores;
}

export default transform;
