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
		if(this.state.currentKeys != key) {
			this.setState({
				currentNote: this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1),
				currentKeys: key
			});
		}
	}

	changeNote(pressed) {
		let currentNote = this.props.data.keys[this.state.currentKeys][this.state.currentNote].note;

		if(pressed === currentNote) {
			let newNote = this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1);
			while(true) {
				//новая нота не должна быть равна предыдущей, если сгенерировалось такое же число меняем, пока не будет другое
				if(newNote === currentNote) {
					newNote = this.randomInteger(0, this.props.data.keys[this.state.currentKeys].length - 1);
				} else {
					this.setState({
						currentNote: newNote
					});
					break;
				}
			}
			return;
		} else {
			alert('Incorrect')
		}
	}

	render() {
		return (
			<div className="app__outer">
				<Header onClick={key => this.changeKey(key)}/>
				<div className="app__inner">
					<TrainingLines current={this.state.currentNote} keys={this.state.currentKeys} lines={this.props.data.keys[this.state.currentKeys]}/>
					<TrainingKeyboard onClick={i => this.changeNote(i)}/>
				</div>
			</div>
		);
	}
}

export default App;
