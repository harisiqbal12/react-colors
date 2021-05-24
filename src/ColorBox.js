import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import sizes from './sizes';

import './ColorBox.css';

class ColorBox extends Component {
	constructor() {
		super();
		this.state = { copied: false };
	}

	changeCopyState = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1400);
		});
	};
	render() {
		const { name, background, paletteId, id, showLink } = this.props;
		const { copied } = this.state;
		const isDarkColor = chroma(background).luminance() <= 0.08;
		const isLightColor = chroma(background).luminance() >= 0.6;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className="ColorBox">
					<div
						style={{ background }}
						className={`copy-overlay ${copied ? 'show' : ''}`}
					/>
					<div className={`copy-msg ${copied ? 'show' : ''}`}>
						<h1 className={`${isLightColor && 'dark-text'}`}>copied</h1>
						<p className={`${isLightColor && 'dark-text'}`}>
							{this.props.background}
						</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={`${isDarkColor && 'light-text'}`}>{name}</span>
						</div>
						<button
							className={`copy-button ${isLightColor && 'dark-text-forCopy'}`}
						>
							+
						</button>
					</div>
					{showLink ? (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={e => e.stopPropagation()}
						>
							<span className={`see-more ${isLightColor && 'dark-text'}`}>
								More
							</span>{' '}
						</Link>
					) : (
						''
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
