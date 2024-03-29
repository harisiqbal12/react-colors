import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import './paletteList.css';

const styles = {
	root: {
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexWrap: 'wrap',

	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
		alignItems: 'center',
		'& a': {
			color: 'white',
			textDecoration: 'none',
		},
	},
	palette: {
		boxSizing: 'border-box',
		width: '100%',

		display: 'grid',
		gridTemplateColumns: 'repeat(4, 30%)',
		gridGap: '3%',
	},
};

class PaletteList extends Component {
	goToPalette = id => {
		this.props.history.push(`palette/${id}`);
	};
	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={'homepage ' + classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>
					<div className={classes.palette}>
						{palettes.map(pal => (
							<MiniPalette
								{...pal}
								handleClick={() => this.goToPalette(pal.id)}
								handleDelete={this.props.deletePalette}
								key={pal.id}
								id={pal.id}
							/>
						))}
					</div>
					{/* <footer className={classes.homepageFooter}>
						<h2>© by Haris Iqbal, All rights reserved</h2>
					</footer> */}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
