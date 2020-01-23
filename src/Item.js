import React, { Component } from 'react'

export default class Item extends Component {
	render() {
		const { item: { title, completed } } = this.props;
		return (
			<div className={`item ${completed?'completed':''}`}>
				{title}
			</div>
		);
	}
}
