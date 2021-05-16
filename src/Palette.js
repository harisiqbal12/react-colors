import React, { Component } from 'react';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import './Palette.css';


class Palette extends Component {
	constructor() {
		super();

		this.state = { level: 500 };
	}

	changeLevel = newLevel => {
		this.setState({ level: newLevel });
	};
	render() {
		const { level } = this.state;
		const { colors } = this.props.palette;
		const colorBoxes = colors[level].map((color, index) => (
			<ColorBox key={index} background={color.hex} name={color.name} />
		));
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} />
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
