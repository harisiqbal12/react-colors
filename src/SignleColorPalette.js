import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFotter';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);

		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: 'hex',
		};
	}

	gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter(color => color.id === colorToFilterBy)
			);
		}

		return shades.slice(1);
	};
	changeFormat = value => {
		this.setState({ format: value });
	};
	render() {
		const colorBoxes = this._shades.map(color => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[this.state.format]}
				showLink={false}
			/>
		));
		return (
			<div className="SingleColorPalette Palette">
				<Navbar showLevel={false} handleChange={this.changeFormat} />

				<div className="Palette-colors">
					{colorBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${this.props.palette.id}`} className="back-button">GO BACK</Link>
					</div>
				</div>
				<PaletteFooter
					paletteName={this.props.palette.paletteName}
					emoji={this.props.palette.emoji}
				/>
			</div>
		);
	}
}

export default SingleColorPalette;
