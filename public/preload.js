window.ipcRenderer = require('electron').ipcRenderer;

const remote = require('electron').remote;

const helpers = remote.require('./electron');

window.createSession = helpers.createSession;

window.getSessions = helpers.getSessions;

window.addStudentToSession = helpers.addStudentToSession;
