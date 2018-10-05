import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderComponent from './Provider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ProviderComponent />, document.getElementById('root'));
registerServiceWorker();
