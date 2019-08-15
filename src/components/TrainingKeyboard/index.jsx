import React from 'react';
import classes from './style.module.css'

const notes = [
	{
		name: 'A',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},
	{
		name: 'A#',
		sharp: 'A',
		flat: 'B',
		color: 'black'
	},
	{
		name: 'B',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},
	{
		name: 'C',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},
	{
		name: 'C#',
		sharp: 'C',
		flat: 'D',
		color: 'black'
	},
	{
		name: 'D',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},
	{
		name: 'D#',
		sharp: 'D',
		flat: 'E',
		color: 'black'
	},
	{
		name: 'E',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},	
	{
		name: 'F',
		sharp: 'E',
		flat: 'G',
		color: 'white'
	},	
	{
		name: 'F#',
		sharp: 'F',
		flat: 'G',
		color: 'black'
	},		
	{
		name: 'G',
		sharp: 'none',
		flat: 'none',
		color: 'white'
	},
	{
		name: 'G#',
		sharp: 'F',
		flat: 'A',
		color: 'black'
	}	
];

const KeyboarButton = (props) => {
	return(
		<button 
			className = {`${classes[props.color]} ${classes.key}`}
			flat = {props.flat}
			sharp = {props.sharp}
			onClick= {props.click.bind(this, props.name)}>{props.name}</button>
	)
}

class TrainingKeyboard extends React.Component {


	createKeyboardButtons() {
		let keyboardButtons = [];
		let currentNote = 0;
		
		for(let i = 0; i < 24; i++) {
			
			if(currentNote === notes.length) {
				currentNote = 0;
			}
			keyboardButtons.push(<KeyboarButton key={`note${i}`} click={i => this.props.onClick(i)} name={notes[currentNote].name} color={notes[currentNote].color} flat={notes[currentNote].flat} sharp={notes[currentNote].sharp}/>);
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