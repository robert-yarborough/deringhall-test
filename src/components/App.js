import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing/Landing';
import Designers from './Designers/Designers';
import DesignerCard from './DesignerCard/DesignerCard';
import designers from '../data/designers';

import './App.scss';

//pass a decoupled prop object to the Designers Component
const App =(designers) => (
	<div className="span_12_of_12">
		<header className="section group">
			<h1 className="col span_6_of_12">Designers</h1>
			<input type="text" className="col span_6_of_12"/>
		</header>
		<Switch>
			<Route exact path="/" component={Landing}/>
			<Route path="/designers" render={(routerProps) => (<Designers {...routerProps} {...designers} />)}/>
			<Route path="/designer-card/:designerKey" render={(routerProps) => (<DesignerCard {...routerProps} {...designers} />)}/>
		</Switch>
	</div>);

export default App;
