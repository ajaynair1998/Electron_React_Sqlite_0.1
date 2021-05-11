import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage';
import Register from './Components/register'
import Records from './Components/records'
import ViewPage from './Components/viewPage'
import './styles.css';
import './stylesViewPage.css'


// const ipcRenderer=window.ipcRenderer
// console.log(ipcRenderer)


ReactDOM.render(<ViewPage />, document.getElementById('root'))
