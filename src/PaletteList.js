import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		overflowY: 'hidden',
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'white',
	},
	palette: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
	},
	homepageFooter: {
		position: 'relative',
		right: '23.5rem',
		top: '3rem',
		'& h2': {
			color: 'white',
			fontSize: '0.7rem',
		},
	},
};

class PaletteList extends Component {
	goToPalette = id => {
		console.log(this.props.history.push);
		this.props.history.push(`palette/${id}`);
	};
	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
					</nav>
					<div className={classes.palette}>
						{palettes.map(pal => (
							<MiniPalette
								{...pal}
								handleClick={() => this.goToPalette(pal.id)}
							/>
						))}
					</div>
					<footer className={classes.homepageFooter}>
						<h2>© by Haris Iqbal, All rights reserved</h2>
					</footer>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
