import React from 'react';

const PaletteFooter = props => {
	return (
		<footer className="Palette-footer">
			<h1>
				{props.paletteName} {props.emoji}
			</h1>
			<h2>© by Haris Iqbal, All rights reserved</h2>
		</footer>
	);
};

export default PaletteFooter;
