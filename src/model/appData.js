
let appData = {
	notes: [
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
	],
	keys: {
		bassLines: [
			{note : "B", empty : "true"},
			{note : "A", empty : ""},
			{note : "G", empty : "true"},
			{note : "F", empty : ""},
			{note : "E", empty : "true"},
			{note : "D", empty : ""},
			{note : "C", empty : "true"},
			{note : "B", empty : ""},
			{note : "A", empty : "true"},
			{note : "G", empty : ""},
			{note : "F", empty : "true"}
		],
		trebleLines: [
			{note : "G", empty : "true"},
			{note : "F", empty : ""},
			{note : "E", empty : "true"},
			{note : "D", empty : ""},
			{note : "C", empty : "true"},
			{note : "B", empty : ""},
			{note : "A", empty : "true"},
			{note : "G", empty : ""},
			{note : "F", empty : "true"},
			{note : "E", empty : ""},
			{note : "D", empty : "true"}
		]
	},
	config: {
		currentKey: 'bassLines'
	}
}

export default appData;
