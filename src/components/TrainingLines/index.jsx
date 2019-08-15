import React from 'react';
import classes from './style.module.css'

const NotesLine = (props) => {
	let emptyness = props.empty ? classes.empty : "";
	let isCurrent = props.current;

	if(isCurrent) {
		return (
			<div className={`${classes.line} ${emptyness}`}><div className={classes.note}><img src="graphics/quarter-note.svg" alt="bass clef"/></div></div>
		)
	} else {
		return (
			<div className={`${classes.line} ${emptyness}`}>{}</div>
		)		
	}

}

class TrainingLines extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {	
		return (
			<div className={classes.outer}>
				<div className={classes[this.props.keys]}>
					{this.props.keys === 'bassLines' &&
						<img src="graphics/bass-clef.svg" alt="bass clef"/>
					}
					{this.props.keys === 'trebleLines' &&
						<img src="graphics/treble-clef.svg" alt="treble clef"/>
					}					
					{this.props.lines.map((value, index) => {			
						return (
							<NotesLine key={index} empty={value.empty} note={value.note} current={index === this.props.current}/>
						)
					})}									
				</div>
			</div>
		)
	}
}

export default TrainingLines;