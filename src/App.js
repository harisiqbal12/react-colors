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
					render={(routeProps) => <PaletteList  palettes={seedColors} {...routeProps}/>}
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
				<Route path='/palette/:paletteId/:colorId' render={()=> <h1>Single Color Page</h1>}/>
			</Switch>
			// 		<div>
			// 	<Palette palette={generatePallet(seedColors[4])} />
			// </div>
		);
	}
}

export default App;
