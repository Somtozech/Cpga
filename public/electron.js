const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron');
const isDev = require('electron-is-dev');
const fs = require('fs');
const path = require('path');

const dataStore = require('./utils/database');
const uploadCourseToDataStore = require('./utils/uploadCourse');

const summary = require('./utils/totalSummary');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  });

  mainWindow.loadURL(
    isDev ? `http://localhost:3000` : `file://${__dirname}/index.html`
  );

  mainWindow.once('ready-to-show', () => mainWindow.show());

  mainWindow.on('closed', () => (mainWindow = null));
};

app.on('ready', () => {
  // dataStore.addStudentToSession('2017-2018', {
  //   name: 'Ezechi Nnaemeka',
  //   regNo: '2015030171355',
  //   mode_of_entry: 'UTME',
  //   state: 'Enugu',
  //   session: [],
  //   id: 'okM1QbD5W'
  // });
  // const student = dataStore.findStudentByRegNo('2017-2018', '2015030171355');
  // console.log(student);
  createWindow();
});

/**
 * Adds a session to the dataStore
 * @param {String} session - session
 */
const createSession = (exports.createSession = session => {
  dataStore.addSession(session);
});

/**
 * Returns the dataStore current state
 */
const getSessions = (exports.getSessions = () => {
  return dataStore.read();
});

/**
 * Adds a student to a session in the dataStore
 * @param {String} session - Session to add Student
 * @param {Object} student - student details
 */
const addStudentToSession = (exports.addStudentToSession = (
  session,
  student
) => {
  return dataStore.addStudentToSession(session, student);
});

/**
 * upload course
 * @param {String} session - session
 */
const uploadCourse = (exports.uploadCourse = session => {
  uploadCourseToDataStore(mainWindow, session);
});

//get session courses for all levels
const getCoursesInSession = (exports.getCoursesInSession = session => {
  return dataStore.getCoursesInSession(session);
});

//get all students in a particular session
const getStudentsInSession = (exports.getStudentsInSession = session => {
  return dataStore.getStudentsInSession(session);
});

const findStudentByRegNo = (exports.findStudentByRegNo = (session, regNo) => {
  return dataStore.findStudentByRegNo(session, regNo);
});

const getStudentInfoByRegNo = (exports.getStudentInfoByRegNo = (
  session,
  regNo
) => {
  return dataStore.getStudentInfoByRegNo(session, regNo);
});

const saveStudentsResult = (exports.saveStudentsResult = (
  session,
  studentId,
  scores
) => {
  dataStore.db
    .get(session)
    .get('students')
    .find({ id: studentId })
    .set('session', scores)
    .write();

  const studentResult = dataStore.db
    .get(session)
    .get('students')
    .find({ id: studentId })
    .value();

  return dataStore.db
    .get(session)
    .get('students')
    .find({ id: studentId })
    .assign(summary(studentResult))
    .write();
});

const printToPdf = (exports.printToPDF = student => {
  mainWindow.webContents.printToPDF(
    {
      marginsType: 0,
      printBackground: false,
      printSelectionOnly: false,
      landscape: false,
      pageSize: 'A4'
    },
    (err, data) => {
      if (err) throw err;
      const dir = path.join(app.getPath('documents'), '/cpga/results');
      let stat;
      try {
        stat = fs.statSync(dir);
      } catch (err) {
        if (err.code === 'ENOENT') {
          fs.mkdirSync(dir.replace('/results', ''));
          fs.mkdirSync(dir);
          stat = fs.statSync(dir);
        }
      }
      let file =
        stat.isDirectory() &&
        path.join(dir, `/${encodeURI(student.name)}_${student.regNo}.pdf`);

      fs.writeFile(file, data, error => {
        if (error) throw error;
        shell.openItem(file);
        alert('Result Saved Successfully!');
      });
    }
  );
});

/**
 * Delete a session
 */
const deleteSession = (exports.deleteSession = session => {
  const result = dialog.showMessageBox(mainWindow, {
    type: 'warning',
    title: 'Delete Session',
    message:
      'Are you sure you want to delete session? All progress involving the session would  be lost.',
    buttons: ['Delete', 'Cancel'],
    defaultId: 1,
    cancelId: 1
  });
  //force window to close if result is 0
  if (result === 0) dataStore.deleteSession(session);
});
