import React, { Component } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPaletteName: '',
		};
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handlePaletteNameChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	render() {
		const { classes, open, handleDrawerOpen, handleSubmit } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div>
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
							Persistent drawer
						</Typography>
						<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
							<TextValidator
								label="Palette Name"
								onChange={this.handlePaletteNameChange}
								value={newPaletteName}
								name="newPaletteName"
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Enter Palette Name',
									'Palette Name Already Exists',
								]}
							/>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
							<Button variant="contained" color="secondary">
								<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
									Go Back
								</Link>
							</Button>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default PaletteFormNav;
