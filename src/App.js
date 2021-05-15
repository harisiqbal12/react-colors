import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePallet } from './colorHelpers';

class App extends Component {
	render() {
		console.log(generatePallet(seedColors[4]))
		return (
			<div>
				<Palette {...seedColors[5]} />
			</div>
		);
	}
}

export default App;
