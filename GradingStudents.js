function gradingStudents(grades) {
  const finalGrades = [];
  for (let i = 0; i < grades.length; i++) {
    // Check if grade is less then 40 then don't round it
    if (grades[i] < 38) {
      finalGrades.push(grades[i]);
    } else {
      const roundToNextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
      const difference = roundToNextMultipleOf5 - grades[i];
      if (difference < 3) {
        finalGrades.push(roundToNextMultipleOf5);
      } else {
        finalGrades.push(grades[i]);
      }
    }
  }
  return finalGrades;
}
