import React from 'react';


const Logo = ({hash, key}) => {
	let url = `${hash}`;
	let check = `${key}`;

	return (<img src={url} key={check} className="logo" alt="logo"/>);
};

export default Logo;