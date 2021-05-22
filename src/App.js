import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SignleColorPalette';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
import { generatePallet } from './colorHelpers';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			palettes: seedColors,
		};
	}

	findPalette = id => {
		return this.state.palettes.find(palette => palette.id === id);
	};

	savePalette = newPalette => {
		this.setState({
			palettes: [...this.state.palettes, newPalette],
		});
	};
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/palette/new"
					render={routeParams => (
						<NewPaletteForm {...routeParams} savePalette={this.savePalette} />
					)}
				/>
				<Route
					exact
					path="/"
					render={routeProps => (
						<PaletteList palettes={this.state.palettes} {...routeProps} />
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
