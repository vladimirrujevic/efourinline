const electron = require('electron')
const app = electron.app

const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow(){
  var windowOptions = {
    width: 800,
    height: 600,
    backgroundColor: "#cccccc",
    fulscreenable: false,
    frame: true,
    title: "Cirrus"
  }

  mainWindow = new BrowserWindow(windowOptions)

  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', function(){
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', function(){
  if(mainWindow === null){
    createWindow()
  }
})
