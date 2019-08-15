import React from 'react';
import classes from './style.module.css';

function Header() {
	return (
		<header className={classes.header}>
			<div className="logo">Training Notes</div>
			<div className="settings">settings</div>
		</header>
	)
}

export default Header;