import React, { Component } from 'react';

import Navbar from './Navbar';
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
		const { colors, paletteName, id } = this.props.palette;
		const colorBoxes = colors[level].map((color, index) => (
			<ColorBox
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
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				<footer className="Palette-footer">
					<h1>{paletteName}</h1>
					<h2>© by Haris Iqbal, All rights reserved</h2>
				</footer>
			</div>
		);
	}
}

export default Palette;
