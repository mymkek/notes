import React from 'react';
import classes from './style.module.css'
import appData from './../../model/appData.js'

class KeyboardButton extends React.Component {


	blink(item, color) {
		item.style.backgroundColor = color;
		setTimeout(function() {
			item.style.backgroundColor = '';
		}, 300)
	}

	render() {
		return(
			<div className={classes.keyOuter}>
				<button
					className = {`${classes[this.props.color]} ${classes.key}`}
					flat = {this.props.flat}
					sharp = {this.props.sharp}
					onClick = {(e) => {
							let isCorrect = this.props.click(this.props.name);
							if(isCorrect) {
								this.blink(e.target, 'green');
							} else {
								this.blink(e.target, 'red')
							}
						}
					}>{this.props.name}</button>
				</div>
		)
	}
}

class TrainingKeyboard extends React.Component {


	createKeyboardButtons() {
		let keyboardButtons = [];
		let currentNote = 0;

		for(let i = 0; i < 28; i++) {

			if(currentNote === appData.notes.length) {
				currentNote = 0;
			}
			keyboardButtons.push(<KeyboardButton key={`note${i}`} click={i => this.props.onClick(i)} name={appData.notes[currentNote].name} color={appData.notes[currentNote].color} flat={appData.notes[currentNote].flat} sharp={appData.notes[currentNote].sharp}/>);
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
