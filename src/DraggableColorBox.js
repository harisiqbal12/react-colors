import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const styles = {
	root: {
		width: '20%',

		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		marginBottom: '-3.5px',
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0px',
		bottom: '0px',
		padding: '10px',
		color: 'black',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		color: 'white',
	},
	deleteIcon: {
		position: 'absolute',
		right: '0.5rem',
		top: '5px',
		color: 'white',
		cursor: 'pointer',
		'&:hover': {
			transition: '0.1s',
			transform: 'scale(1.2)',
		},
		'&:active': {
			transition: '0.1s',
			color: '#333333',
		},
	},
};

const DraggableColorBox = SortableElement(props => {
	return (
		<div
			className={props.classes.root}
			style={{ backgroundColor: props.color }}
		>
			<div className={props.classes.boxContent}>
				<span>{props.name}</span>
				<DeleteSweepIcon
					className={props.classes.deleteIcon}
					onClick={props.handleClick}
				/>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
