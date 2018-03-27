import React from 'react';
import ReactDOM from 'react-dom';
import LoginES6 from './State/ES6';
import LoginNonES6 from './State/nonES6';
import registerServiceWorker from './registerServiceWorker';
import NameForm from './Forms/ES6';
import WelcomeDialog from './Containement/dialog';

ReactDOM.render(<LoginES6 />, document.getElementById('loginES6'));
ReactDOM.render(<LoginNonES6 />, document.getElementById('loginNonES6'));
ReactDOM.render(<NameForm />, document.getElementById('nameForm'));
ReactDOM.render(<WelcomeDialog />, document.getElementById('dialog'));
registerServiceWorker();
