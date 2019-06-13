function getSummaryForEachYear(arr) {
  return arr.map(a => ({ ...a, total: addTotal(addGradeAndGp(a)) }));
}

function totalSummary(obj) {
  const summary = { ...obj };
  summary.session = getSummaryForEachYear(obj.session);
  const total = summary.session.reduce((obj, a) => {
    if (!obj.tcp) obj.tcp = 0;
    if (!obj.fcp) obj.fcp = 0;
    obj.tcp += a.total.summary.tcp;
    obj.fcp += a.total.summary.fcp;
    return obj;
  }, {});

  total['gp'] = (total.fcp / total.tcp).toFixed(2);

  summary.total = total;
  summary.session = getSummaryForEachYear(obj.session);
  return summary;
}

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

module.exports = totalSummary;
