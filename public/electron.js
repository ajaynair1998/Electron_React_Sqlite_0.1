const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const sqlite3=require('sqlite3')
const { ipcMain } = require('electron');
const {Notification}=require('electron')

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680,webPreferences:{nodeIntegration:true}});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

//logic for sqlite

let database
if(isDev){
       database = new sqlite3.Database('./public/test.db', (err) => {
          if (err) console.error('Database opening error: ', err);
      });
}
else{
  database = new sqlite3.Database(path.join(app.getAppPath(),'..','..','resources','app.asar.unpacked','test.db'), (err) =>
  {
    if (err) console.error('Database opening error: ', err);
  });
}



database.all('select * from testtable',(err,rows) =>{
  console.log((err && err.message) || rows)
   const notification = {
    title: 'Basic Notification',
    body: `${JSON.stringify(rows[0])}`
  }
  new Notification(notification).show()

})

return new Promise ((resolve) =>
{
    setTimeout(()=>
    {
      new Notification({
        title: 'starting up', body: `file://${__dirname}`
      }).show()
      
       new Notification({
         title: 'starting up', body: path.join(app.getAppPath(), '..', '..','resources', 'app.asar.unpacked', 'test.db')
      }).show()


    },5000)
})

