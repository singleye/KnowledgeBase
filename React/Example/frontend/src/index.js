import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MainApp from './App';

ReactDOM.render(<MainApp />, document.getElementById('app'));
registerServiceWorker();
/*
import FunctionalComponent from './Component/function';
import ES6Component from './Component/ES6.js';
import NonES6Component from './Component/nonES6';
import LoginES6 from './State/ES6';
import LoginNonES6 from './State/nonES6';
import NameForm from './Forms/ES6';
import WelcomeDialog from './Containement/dialog';
import LoginApp from './App/loginPromise';
import AppNoRoute from './Router/CompNoRoute';
import AppWithRoute from './Router/CompRoute';

// component
ReactDOM.render(<ES6Component />, document.getElementById('es6Component'));
ReactDOM.render(<NonES6Component />, document.getElementById('nonES6Component'));
ReactDOM.render(<FunctionalComponent />, document.getElementById('functionalComponent'));

// route
ReactDOM.render(<AppNoRoute />, document.getElementById('appNoRoute'));
ReactDOM.render(<AppWithRoute />, document.getElementById('appWithRoute'));

ReactDOM.render(<LoginES6 />, document.getElementById('loginES6'));
ReactDOM.render(<LoginNonES6 />, document.getElementById('loginNonES6'));
ReactDOM.render(<NameForm />, document.getElementById('nameForm'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('dialog'));
ReactDOM.render(<LoginApp />, document.getElementById('appLogin'));
*/
