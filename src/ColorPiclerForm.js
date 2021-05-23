import React, { Component } from 'react';

import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: 'teal',
			newName: '',
		};
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', value =>
			this.props.colors.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isColorUnique', value =>
			this.props.colors.colors.every(
				({ color }) => color !== this.state.currentColor
			)
		);
	}

	updateCurrentColor = newColor => {
		console.log(newColor);
		this.setState({
			currentColor: newColor.hex,
		});
	};

	handleChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	};

	handleSubmit = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newName,
		};

		this.props.addNewColors(newColor);
		this.setState({
			newName: '',
			currentColor: 'teal',
		});
	};

	render() {
		const { isPaletteFull, classes } = this.props;
		const { currentColor } = this.state;

		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit}>
					<TextValidator
						value={this.state.newName}
						className={classes.colorNameInput}
						onChange={this.handleChange}
						name="newName"
            margin='normal'
            placeholder='Color Name'
						validators={['required', 'isColorNameUnique', 'isColorUnique']}
						errorMessages={[
							'this field is required',
							'color name must be unique',
							'color already exists',
						]}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ backgroundColor: currentColor }}
						type="submit"
						disabled={isPaletteFull}
						className={classes.addColor}
					>
						{isPaletteFull ? 'Palette Full' : 'Add Colors'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default ColorPickerForm;
