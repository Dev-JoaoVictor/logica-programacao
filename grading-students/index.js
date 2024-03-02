function gradingStudents(grades) {

  const newGrades = grades.map((grade) => {
    const nextMultiple = grade + (5 - grade % 5)
    const difference = nextMultiple - grade;

    if (nextMultiple === 40) {
      if (difference < 3) return nextMultiple;
      else return grade;
    }

    if (nextMultiple < 40) return grade;

    if (difference < 3) return nextMultiple;

    return grade;


  })

  return newGrades
}

gradingStudents([73, 67, 38, 33])
