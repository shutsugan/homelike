import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const container = document.querySelector('#root');

ReactDOM.render(<App/>, container);
registerServiceWorker();
