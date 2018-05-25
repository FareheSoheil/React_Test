import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
