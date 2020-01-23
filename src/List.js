import React, { Component } from 'react';
import CreateItem from './CreateItem';
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
						onSetComplete={this.props.onSetComplete}
						onDelete={this.props.onDelete}
					/>
				)}
				{!items.length && 'No items.'}
				<CreateItem onCreate={this.props.onCreate} />
			</div>
		)
	}
}
