import React from 'react';
import Header from './components/Header'
import TrainingLines from './components/TrainingLines'
import TrainingKeyboard from './components/TrainingKeyboard'
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentNote: 1,
			currentKeys: this.props.data.config.currentKey
		}
	}

	randomInteger(min, max) {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}

	changeKey(key) {
		if(this.state.currentKeys !== key) {
			this.setState({
				currentNote: this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1),
				currentKeys: key
			});
		}
	}

	checkNote(pressed) {
		let currentNote = this.props.data.keys[this.state.currentKeys][this.state.currentNote].note;

		if(pressed === currentNote) {
			this.changeNote();
			return true;
		} else {
			return false;
		}
	}

	changeNote() {
		let newNote = this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1);
		while(true) {
			//новая нота не должна быть равна предыдущей, если сгенерировалось такое же число меняем, пока не будет другое
			if(newNote === this.state.currentNote) {
				newNote = this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1);
			} else {
				this.setState({
					currentNote: newNote
				});
				break;
			}
		}
	}

	render() {
		return (
			<div className="app__outer">
				<Header onClick={key => this.changeKey(key)}/>
				<div className="app__inner">
					<TrainingLines current={this.state.currentNote} keys={this.state.currentKeys} lines={this.props.data.keys[this.state.currentKeys]}/>
					<TrainingKeyboard onClick={i => this.checkNote(i)}/>
				</div>
			</div>
		);
	}
}

export default App;
