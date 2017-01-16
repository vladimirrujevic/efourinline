const electron = require('electron')
const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow

let createWindow = () => {
  let windowOptions = {
    width: 800,
    height: 600,
    backgroundColor: '#cccccc',
    fulscreenable: false,
    frame: false,
    title: 'Štiri v vrsto',
    icon: 'favicon.ico'
  }

  mainWindow = new BrowserWindow(windowOptions)

  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.loadURL('http://127.0.0.1:8080')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
