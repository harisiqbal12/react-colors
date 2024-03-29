import chroma from 'chroma-js';

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = hexColors => {
	const end = '#fff';
	return [chroma(hexColors).darken(1.4).hex(), hexColors, end];
};

const generateScale = (hexColor, numberOfColor) =>
	chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColor);

const generatePallet = starterPallete => {
	let newPalette = {
		paletteName: starterPallete.paletteName,
		id: starterPallete.id,
		emoji: starterPallete.emoji,
		colors: {},
	};

	for (let level of levels) {
		newPalette.colors[level] = [];
	}

	for (let color of starterPallete.colors) {
		let scale = generateScale(color.color, 10).reverse();
		for (let i in scale) {
			newPalette.colors[levels[i]].push({
				name: `${color.name} ${levels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, '- '),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
			});
		}
	}

  return newPalette;
};

export { generatePallet };
