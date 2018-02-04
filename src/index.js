import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.js';
import designers from './data/designers';
import registerServiceWorker from './registerServiceWorker';

import './components/index.scss';


ReactDOM.render(
	<BrowserRouter>
		<App designers={designers}/>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
