import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

import PaletteFormNav from './paletteFormNav';
import ColorPickerForm from './ColorPiclerForm';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		height: 'calc(100vh - 64px) ',
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const NewPaletteForm = props => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, setCurrentColor] = React.useState('teal');
	const [colors, setColors] = React.useState({
		colors: props.palettes[0].colors,
	});

	React.useEffect(() => {

	});

	const isPaletteFull = colors.colors.length >= 20;

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addNewColors = newColor => {
		setColors({ colors: [...colors.colors, newColor] });

	};


	const handleSubmit = newPaletteName => {
		const newPalette = {
			paletteName: newPaletteName,
			colors: colors.colors,
			id: newPaletteName.toLowerCase().replace(/ /g, '-'),
		};
		props.savePalette(newPalette);
		props.history.push('/');
	};

	const removeColor = colorName => {
		setColors({
			colors: colors.colors.filter(color => color.name !== colorName),
		});
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setColors(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	const clearPalette = () => {
		setColors({ colors: [] });
	};

	const randomColor = () => {
		const allColors = props.palettes.map(p => p.colors).flat();
		const rand = Math.floor(Math.random() * allColors.length);
		const randomColors = allColors[rand];
		setColors({ colors: [...colors.colors, randomColors] });
	};
	return (
		<div className={classes.root}>
			<PaletteFormNav
				open={open}
				classes={classes}
				palettes={props.palettes}
				handleDrawerOpen={handleDrawerOpen}
				handleSubmit={handleSubmit}
			/>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<Typography variant="h4">Design Your Palette</Typography>
				<div>
					<Button variant="contained" color="secondary" onClick={clearPalette}>
						Clear Palette
					</Button>
					<Button
						variant="contained"
						color="primary"
						disabled={isPaletteFull}
						onClick={randomColor}
					>
						Random Colors
					</Button>
				</div>
				<ColorPickerForm
					isPaletteFull={isPaletteFull}
					colors={colors}
					addNewColors={addNewColors}
				/>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				<DraggableColorList
					colors={colors}
					removeColor={removeColor}
					axis="xy"
					onSortEnd={onSortEnd}
				/>
			</main>
		</div>
	);
};

export default NewPaletteForm;
