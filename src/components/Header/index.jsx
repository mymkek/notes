import React from 'react';
import classes from './style.module.css';

const SettingsPanel = (props) => {
	return (
		<div className={classes.settingsPanel}>
			<div className={classes.settingKey}>
				<button onClick={key => props.onClick('bassLines')}>
					<img src="graphics/bass-clef.svg" alt="bass clef"/>
					<span>Try bass key</span>
				</button>
				<button onClick={key => props.onClick('trebleLines')}>
					<img src="graphics/treble-clef.svg" alt="treble clef"/>
					<span>Try treble key</span>
				</button>
			</div>
		</div>
	)
}

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOptionsOpen: false
		}
	}

	handleSettingsPanel = () => {
		this.setState({
			isOptionsOpen: !this.state.isOptionsOpen
		});
	}

	render() {
		return (
			<header className={classes.header}>
				<div className={classes.logo}>Training Notes</div>
				<button type="button" className={classes.settings} onClick={this.handleSettingsPanel}>settings</button>
				{this.state.isOptionsOpen && <SettingsPanel onClick={key => this.props.onClick(key)}/>}
			</header>
		)
	}

}

export default Header;
