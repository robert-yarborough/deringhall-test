import React from 'react';
import Logo from "../Logo/Logo";
import './designer_logo.scss';


const DesignerLogo = ({designer}) => {
	return (
		<div className="">
			<Logo key={designer.key} hash={designer}/>
		</div>)};



export default DesignerLogo;