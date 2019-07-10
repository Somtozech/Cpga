window.ipcRenderer = require('electron').ipcRenderer;

const remote = require('electron').remote;

const helpers = remote.require('./electron');

window.createSession = helpers.createSession;

window.getSessions = helpers.getSessions;

window.addStudentToSession = helpers.addStudentToSession;

window.uploadCourse = helpers.uploadCourse;

window.getCoursesInSession = helpers.getCoursesInSession;

window.getStudentsInSession = helpers.getStudentsInSession;

window.findStudentByRegNo = helpers.findStudentByRegNo;

window.saveStudentsResult = helpers.saveStudentsResult;

window.printToPDF = helpers.printToPDF;
