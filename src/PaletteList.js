import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		return (
			<div className="Palette-list">
				<h1>React Colors</h1>
				{palettes.map(pal => (
					<p>
						<Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}

export default PaletteList;
