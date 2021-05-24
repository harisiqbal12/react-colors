import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
	constructor() {
		super();

		this.state = {
			open: true,
			newPaletteName: '',
			emojiPicker: false,
		};
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handleClickOpen = () => {
		this.setState({
			open: true,
		});
	};

	handleClose = () => {
		this.setState({
			open: false,
		});

		this.props.hideForm();
	};

	handlePaletteNameChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handlePaletteNameSubmit = newPaletteName => {
		this.setState({
			emojiPicker: true,
			open: false,
			newPaletteName,
		});
	};

	handleFinalSubmit = emoji => {
		this.props.handleSubmit(this.state.newPaletteName, emoji);
	};

	render() {
		const { newPaletteName } = this.state;

		return (
			<div>
				<Dialog open={this.state.emojiPicker}>
					<Picker onSelect={e => this.handleFinalSubmit(e.native)} />
				</Dialog>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">
						Choose a Palette Name
					</DialogTitle>
					<ValidatorForm
						onSubmit={() => this.handlePaletteNameSubmit(newPaletteName)}
					>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your beautiful palette. Make sure it's
								unique.
							</DialogContentText>
							<TextValidator
								label="Palette Name"
								onChange={this.handlePaletteNameChange}
								value={newPaletteName}
								name="newPaletteName"
								margin="normal"
								validators={['required', 'isPaletteNameUnique']}
								errorMessages={[
									'Enter Palette Name',
									'Palette Name Already Exists',
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
