const { computeGp, computeGrade } = require('./getGradeAndScore');

/**
 * It returns an array in which the gp and grade is added to each semester in a year
 * @param {Array} arr - student session Array
 */
function addGradeAndGp(arr) {
  const first = arr.first;
  const second = arr.second;
  first.forEach((course, i) => {
    arr.first[i] = {
      ...course,
      gp: computeGp(course.unit, course.score),
      grade: computeGrade(course.score)
    };
  });
  second.forEach((course, i) => {
    arr.second[i] = {
      ...course,
      gp: computeGp(course.unit, course.score),
      grade: computeGrade(course.score)
    };
  });
  return arr;
}

module.exports = addGradeAndGp;
