const XLSX = require('xlsx');
const { dialog, app } = require('electron');

const dataStore = require('./database');
const parseArr = require('./parseArr');

const selectCourse = (mainWindow, session) => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    defaultPath: app.getPath('documents'),
    filters: [
      {
        name: 'Excel Files',
        extensions: ['xlsx']
      }
    ]
  });

  if (!files) return;
  uploadCourse(session, files[0]);
};

const uploadCourse = (session = '2017-2018', file) => {
  const workbook = XLSX.readFile(file, { type: 'string' });
  const sheetName = workbook.Sheets[workbook.SheetNames[0]];

  const json = XLSX.utils
    .sheet_to_json(sheetName, { header: 1 })
    .filter(a => a.length !== 0)
    .map(a => a.filter(i => i !== null));

  const coursesArr = parseArr(json);
  dataStore.addCoursesToSession(session, coursesArr);
};

module.exports = selectCourse;
