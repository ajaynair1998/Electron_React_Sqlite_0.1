

import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/homePage';
import Register from './Components/register'
import './styles.css';
const ipcRenderer=window.ipcRenderer
console.log(ipcRenderer)


ReactDOM.render(<Register ipcRenderer={ipcRenderer}/>, document.getElementById('root'))
