const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

const dataStore = require('./utils/database');
const uploadCourseToDataStore = require('./utils/uploadCourse');

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
  dataStore.addStudentToSession(session, student);
});

/**
 * upload course
 * @param {String} session - session
 */
const uploadCourse = (exports.uploadCourse = session => {
  uploadCourseToDataStore(mainWindow, session);
});
