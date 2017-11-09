import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
=======
import './vendors/bootstrap/css/bootstrap.min.css'
>>>>>>> 19094fb744fd72f95e20863a48af5aca33ef7380
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
