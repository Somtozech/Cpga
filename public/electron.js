const { app, BrowserWindow } = require('electron');

const isDev = require('electron-is-dev');

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
