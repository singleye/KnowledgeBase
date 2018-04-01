import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import MainApp from './App';

ReactDOM.render(<MainApp />, document.getElementById('app'));
registerServiceWorker();
/*
import LoginES6 from './State/ES6';
import LoginNonES6 from './State/nonES6';
import NameForm from './Forms/ES6';
import WelcomeDialog from './Containement/dialog';
import AppNoRoute from './Router/CompNoRoute';
import AppWithRoute from './Router/CompRoute';


// route
ReactDOM.render(<AppNoRoute />, document.getElementById('appNoRoute'));
ReactDOM.render(<AppWithRoute />, document.getElementById('appWithRoute'));

ReactDOM.render(<LoginES6 />, document.getElementById('loginES6'));
ReactDOM.render(<LoginNonES6 />, document.getElementById('loginNonES6'));
ReactDOM.render(<NameForm />, document.getElementById('nameForm'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('dialog'));
*/
