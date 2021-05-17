import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePallet } from './colorHelpers';

class App extends Component {
	findPalette = id => {
		return seedColors.find(palette => palette.id === id);
	};
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => <PaletteList  palettes={seedColors} />}
				/>
				<Route
					exact
					path="/palette/:id"
					render={routeParams => (
						<Palette
							palette={generatePallet(
								this.findPalette(routeParams.match.params.id)
							)}
						/>
					)}
				/>
			</Switch>
			// 		<div>
			// 	<Palette palette={generatePallet(seedColors[4])} />
			// </div>
		);
	}
}

export default App;
