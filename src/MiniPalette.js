import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Component } from 'react';
import { render } from '@testing-library/react';

const styles = {
	root: {
		backgroundColor: 'white',
		border: '1px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'&:hover svg': {
			transition: '0.2s',
			opacity: 1,
		},
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden',
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: 'black',
		paddingTop: '0.5',
		fontSize: '1rem',
		position: 'relative',
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem',
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-3.5px',
	},
	delete: {},

	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '20px',
		heigh: '20px',
		position: 'absolute',
		right: '0px',
		top: '0px',
		padding: '10px',
		zIndex: 10,
		opacity: 0,
	},
};

class MiniPalette extends Component {
	constructor(props) {
		super(props);
	}

	deletePalette = e => {
		e.stopPropagation();
		this.props.handleDelete(this.props.id);
	};

	render() {
		const { classes, paletteName, emoji, colors, handleClick } = this.props;
		const miniColorBoxes = colors.map(color => (
			<div
				className={classes.miniColor}
				style={{ backgroundColor: color.color }}
				key={color.name}
			></div>
		));
		return (
			<div className={classes.root} onClick={handleClick}>
				<DeleteIcon
					className={classes.deleteIcon}
					onClick={this.deletePalette}
				/>
				<div className={classes.colors}>{miniColorBoxes}</div>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
