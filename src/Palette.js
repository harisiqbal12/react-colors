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
		this.setState({format: value})
	};
	render() {
		const { level, format } = this.state;
		const { colors } = this.props.palette;
		const colorBoxes = colors[level].map((color, index) => (
			<ColorBox key={index} background={color[format]} name={color.name} />
		));
		
		return (
			<div className="Palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
				/>
				<div className="Palette-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
