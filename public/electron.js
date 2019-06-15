const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

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
  createWindow();
  dataStore.addStudentToSession('2018-2019', {
    name: 'Ezechi Nnaemeka',
    regNo: '2015030171355',
    mode_of_entry: 'UTME',
    state: 'Enugu',
    session: [],
    id: 'okM1QbD5W'
  });
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
  return dataStore.db.getState();
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
  return dataStore.db
    .get(session)
    .get('students')
    .find({ regNo })
    .value();
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
