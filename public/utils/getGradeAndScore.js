function computeGrade(score) {
  let result = 'F';
  score = parseInt(score);
  if (isNaN(score)) return '-';
  if (score >= 70 && score <= 100) result = 'A';
  if (score >= 60 && score <= 69) result = 'B';
  if (score >= 50 && score <= 59) result = 'C';
  if (score >= 45 && score <= 49) result = 'D';

  return result;
}

function computeGp(unit, score) {
  unit = parseInt(unit);
  let grade = computeGrade(score);
  const gradeObj = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    F: 0
  };
  if (isNaN(gradeObj[grade])) return '-';
  return unit * gradeObj[grade];
}

module.exports = {
  computeGp,
  computeGrade
};
