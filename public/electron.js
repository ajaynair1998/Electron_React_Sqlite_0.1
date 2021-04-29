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

//preload.js doesnt have access to window object if contextIsolation is true
//VERY IMPORTANT!!!
//USE Preload.js to pass in ipc Renderer to react

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680,webPreferences:{preload:path.join(__dirname,'preload'),nodeIntegration: false,
  contextIsolation: false,
  }});
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


//APPLICATION LOGIC AFTER THIS LINE
// -------------------------------------------------------------------------






//logic for ACCESSING sqlite
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




//ipc logic

//recieving form-data
ipcMain.on('form-data',(event,args)=>
{
  console.log(args)
})

















// accessing the sqlite database
// database.all('select * from testtable',(err,rows) =>{
//   console.log((err && err.message) || rows)
//    const notification = {
//     title: 'Basic Notification',
//     body: `${JSON.stringify(rows[0])}`
//   }
//   new Notification(notification).show()

// })




//testing out ipcmain
// ipcMain.on('ping',(event,args) =>{
//   console.log('got the message from react')
// })



//getting current directory
// return new Promise ((resolve) =>
// {
//     setTimeout(()=>
//     {
//       new Notification({
//         title: 'starting up', body: `file://${__dirname}`
//       }).show()
      
//        new Notification({
//          title: 'starting up', body: path.join(app.getAppPath(), '..', '..','resources', 'app.asar.unpacked', 'test.db')
//       }).show()


//     },5000)
// })



