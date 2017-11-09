import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
