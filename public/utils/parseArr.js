const shortid = require('shortid');

function parseArr(arr) {
  //possible levels/years in school
  const schoolYears = [
    'year one',
    'year two',
    'year three',
    'year four',
    'year five',
    'year six',
    'year seven'
  ];

  //session array
  const session = [];

  //get the index of each year from the arr and create an object with each year having a value of its index
  const yearIndex = arr.reduce((obj, arr, j) => {
    arr.forEach((s, i) => {
      const str = String(s).toLowerCase();
      if (schoolYears.includes(str)) {
        obj[str] = j;
      }
    });
    return obj;
  }, {});

  for (let i = 0; i < Object.keys(yearIndex).length; i++) {
    const year = Object.keys(yearIndex)[i];
    const nextYear = Object.keys(yearIndex)[i + 1];
    let s = yearIndex[year] + 3;
    let e = yearIndex[nextYear] ? yearIndex[nextYear] : arr.length;
    const schoolYear = {
      id: shortid.generate(),
      year,
      first: [],
      second: []
    };
    for (let j = s; j < e; j++) {
      for (let g = 0; g < arr[j].length; g += 3) {
        if (g === 0 && arr[j][g]) {
          schoolYear.first.push({
            id: shortid.generate(),
            code: arr[j][g],
            title: arr[j][g + 1],
            unit: arr[j][g + 2]
          });
        }
        if (g === 3 && arr[j][g]) {
          schoolYear.second.push({
            id: shortid.generate(),
            code: arr[j][g],
            title: arr[j][g + 1],
            unit: arr[j][g + 2]
          });
        }
      }
    }
    session.push(schoolYear);
  }
  return session;
}

module.exports = parseArr;
