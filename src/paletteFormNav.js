import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import PaletteMetaForm from './PaletteMetaForm';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPaletteName: '',
			formShowing: false,
		};
	}

	handlePaletteNameChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	showForm = () => {
		console.log('clicked');
		this.setState({ formShowing: true });
	};

	render() {
		const { classes, open, handleDrawerOpen, handleSubmit } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Create A Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Button
							className={classes.headerButton}
							variant="contained"
							color="secondary"
						>
							<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
								GO Back
							</Link>
						</Button>
						<Button
							className={classes.headerButton}
							variant="contained"
							color="primary"
							onClick={this.showForm}
						>
							Save
						</Button>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteMetaForm
						handleSubmit={handleSubmit}
						palettes={this.props.palettes}
					/>
				)}
			</div>
		);
	}
}

export default PaletteFormNav;
