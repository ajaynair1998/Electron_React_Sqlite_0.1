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

  //Seperating the keys and values since we get the jsonobject
  let keys=Object.keys(args)
  let values=Object.values(args)
  let keys_in_double_quotes=keys.map(item =>{
    return `"${item}"`
  })
  let values_in_double_quotes=values.map(item =>{
    return `"${item}"`
  })
  
  //sql query to add values into database
  let query_to_insert=`INSERT INTO Patient_Data (${keys_in_double_quotes.toString()}) VALUES( ${values_in_double_quotes.toString()})`
  console.log(query_to_insert)


  //now adding these values into the sqlite database
  database.all(query_to_insert,(err,rows)=>
  {
    if (err)
      {console.log(err)}
    else{
      console.log('successfully inserted Patient Data')
    }
  })
  
  
})



//sending patient names and id to records page
ipcMain.on('give_patient_data',(event,args)=>
{
  

  //we have to send back the names and id of all patients
  event.reply('yep got it')
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



