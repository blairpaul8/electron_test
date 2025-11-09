const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    heght: 600
  })

  win.loadFile('index.html')
}

app.on('ready', () => {
  createWindow()
})
