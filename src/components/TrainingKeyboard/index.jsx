import React from 'react';
import classes from './style.module.css'
import appData from './../../model/appData.js'

const KeyboarButton = (props) => {
	return(
		<div className={classes.keyOuter}>
			<button
				className = {`${classes[props.color]} ${classes.key}`}
				flat = {props.flat}
				sharp = {props.sharp}
				onClick= {props.click.bind(this, props.name)}>{props.name}</button>
			</div>
	)
}

class TrainingKeyboard extends React.Component {


	createKeyboardButtons() {
		let keyboardButtons = [];
		let currentNote = 0;

		for(let i = 0; i < 28; i++) {

			if(currentNote === appData.notes.length) {
				currentNote = 0;
			}
			keyboardButtons.push(<KeyboarButton key={`note${i}`} click={i => this.props.onClick(i)} name={appData.notes[currentNote].name} color={appData.notes[currentNote].color} flat={appData.notes[currentNote].flat} sharp={appData.notes[currentNote].sharp}/>);
			currentNote++;
		}
		return keyboardButtons;
	}

	render() {
		const keysArray = this.createKeyboardButtons();
		return(
			<div className = {classes.keyboard}>
			    {keysArray}
			</div>
		)
	}

}

export default TrainingKeyboard;
