import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import { MenuItem, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = { format: 'hex', open: false };
	}

	handleChange = e => {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
		this.setState({ open: true });
		setTimeout(() => {
			this.setState({ open: false });
		}, 1000);
	};

	handleClose = e => {
		console.log(e);
	};

	Alert = props => {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	};

	render() {
		const { level, changeLevel, showLevel } = this.props;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/">reactcolorpicker</Link>
				</div>
				{showLevel ? (
					<div className="slider-container">
						<span>Level: {level}</span>
						<div className="slider">
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				) : (
					''
				)}

				<div className="select-container">
					<Select value={this.state.format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #fffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					message="successfull"
					onClose={this.handleClose}
					// style={{ width: '20rem' }}
				>
					<this.Alert severity="success" style={{ backgroundColor: '#4c5561' }}>
						{' '}
						Format changed - {this.state.format.toUpperCase()}
					</this.Alert>
				</Snackbar>
			</header>
		);
	}
}

export default Navbar;
