const getSummaryForEachYear = require('./getSummaryForEachYear');

/**
 * This adds the total summary of all the levels to the student object
 * @param {*} obj - Student's Object
 */
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
  return summary;
}

module.exports = totalSummary;
