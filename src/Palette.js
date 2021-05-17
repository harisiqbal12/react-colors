import React, { Component } from 'react';

import Navbar from './Navbar';
import PaletteFooter from './PaletteFotter'
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
	constructor() {
		super();

		this.state = { level: 500, format: 'hex' };
	}

	changeLevel = newLevel => {
		this.setState({ level: newLevel });
	};

	changeFormat = value => {
		this.setState({ format: value });
	};
	render() {
		const { level, format } = this.state;
		const { colors, paletteName, emoji, id } = this.props.palette;
		console.log(paletteName);
		const colorBoxes = colors[level].map((color, index) => (
			<ColorBox
				showLink={true}
				key={color.id}
				id={color.id}
				background={color[format]}
				name={color.name}
				paletteId={id}
				
			/>
		));

		return (
			<div className="Palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showLevel
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default Palette;
