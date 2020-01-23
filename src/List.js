import React, { Component } from 'react';
import Item from './Item';
import './List.css';

export default class List extends Component {
	render() {
		const { items } = this.props;
		return (
			<div className="list">
				{items.map(item => 
					<Item 
						key={item.id}
						item={item}
						onSetCompleted={this.props.onSetCompleted}
						onDeleted={this.props.onDeleted}
					/>
				)}
				{!items.length && 'No items.'}
			</div>
		)
	}
}
