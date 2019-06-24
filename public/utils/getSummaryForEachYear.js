const addGradeAndGp = require('./addGpAndGrade');

/**
 * Add Total returns the session object with a total property
 * The total property has first semester and second second total summation of unit, grade and gp
 * The total property also has a summary that has the total tcp and fcp for both first and second semester
 * @param {Object} sessionObj - Session Object
 */
function addTotal(sessionObj) {
  const firstSemester = sessionObj.first;
  const secondSemester = sessionObj.second;

  //first semester total;
  const firstSemTotal = firstSemester.reduce((obj, course) => {
    const gp = course.gp !== 0 && !course.gp ? '-' : parseInt(course.gp);
    const unit =
      course.unit !== 0 && !course.unit ? '-' : parseInt(course.unit);
    if (!obj.unit) obj.unit = 0;
    if (!obj.gp) obj.gp = 0;
    if (!obj.grade) obj.grade = 0;
    if (!isNaN(gp) && !isNaN(unit)) {
      obj.gp += gp;
      obj.unit += unit;
    }
    return obj;
  }, {});

  //second semester total
  const secondSemTotal = secondSemester.reduce((obj, course) => {
    const gp = course.gp !== 0 && !course.gp ? '-' : parseInt(course.gp);
    const unit =
      course.unit !== 0 && !course.unit ? '-' : parseInt(course.unit);
    if (!obj.unit) obj.unit = 0;
    if (!obj.gp) obj.gp = 0;
    if (!obj.grade) obj.grade = 0;
    if (!isNaN(gp) && !isNaN(unit)) {
      obj.gp += gp;
      obj.unit += unit;
    }
    return obj;
  }, {});

  const firstGrade = firstSemTotal.gp / firstSemTotal.unit;
  firstSemTotal.grade = isNaN(firstGrade) ? 0 : firstGrade.toFixed(2);

  const secondGrade = secondSemTotal.gp / secondSemTotal.unit;
  secondSemTotal.grade = isNaN(secondGrade) ? 0 : secondGrade.toFixed(2);

  //summary
  const summary = {
    tcp: firstSemTotal.unit + secondSemTotal.unit,
    fcp: firstSemTotal.gp + secondSemTotal.gp
  };

  return {
    first: firstSemTotal,
    second: secondSemTotal,
    summary
  };
}

/**
 * Maps through each year and adds the total summary for each year
 * @param {*} arr - Array
 */
function getSummaryForEachYear(arr) {
  return arr.map(a => ({ ...a, total: addTotal(addGradeAndGp(a)) }));
}

module.exports = getSummaryForEachYear;
