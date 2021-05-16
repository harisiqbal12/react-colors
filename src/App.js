import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePallet } from './colorHelpers';

class App extends Component {
	render() {
		return (
			<div>
				<Palette palette={generatePallet(seedColors[4])} />
			</div>
		);
	}
}

export default App;
