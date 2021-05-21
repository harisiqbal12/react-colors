import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SignleColorPalette';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
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
					path="/palette/new"
					render={routeParams => <NewPaletteForm {...routeParams} />}
				/>
				<Route
					exact
					path="/"
					render={routeProps => (
						<PaletteList palettes={seedColors} {...routeProps} />
					)}
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
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={routeProps => (
						<SingleColorPalette
							palette={generatePallet(
								this.findPalette(routeProps.match.params.paletteId)
							)}
							routeProps={routeProps}
							colorId={routeProps.match.params.colorId}
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
