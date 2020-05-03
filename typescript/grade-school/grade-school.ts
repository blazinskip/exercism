export default class GradeSchool {
  private readonly roaster = new Map<string, string[]>();

  studentRoster(): Map<string, string[]> {
    const copyOfRoster = new Map();

    [...this.roaster.entries()].sort()
      .forEach(([grade, students]) => copyOfRoster.set(grade, [...students]));

    return copyOfRoster;
  }

  addStudent(student: string, grade: number) {
    const gradeKey = `${grade}`;
    if (this.roaster.has(gradeKey)) {
      const students = this.roaster.get(gradeKey) || [];
      this.roaster.set(gradeKey, [student, ...students].sort());
    } else {
      this.roaster.set(gradeKey, [student]);
    }
  }

  studentsInGrade(grade: number): string[] {
    return [...(this.roaster.get(`${grade}`) || [])];
  }
}
