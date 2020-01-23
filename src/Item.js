import React, { Component } from 'react';
import './Item.css';

export default class Item extends Component {
	render() {
		const { item: { id, title, completed }, onSetCompleted, onDeleted } = this.props;
		return (
			<div className={`item ${completed?'completed':''}`}>
				<span className="status">
					<input type="checkbox" checked={completed} onChange={event => onSetCompleted(id, event.target.checked)}></input>
				</span>
				<span className="title">
					{title}
				</span>
				<span className="buttons">
					<button className="delete" onClick={e => onDeleted(id)}>X</button>
				</span>
			</div>
		);
	}
}