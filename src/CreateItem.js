import React, { Component } from 'react';

export default class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: {
				userId: 1,
				title: '',
				completed: false
			}
		};
	}

	onTitleChange(event) {
		this.setState({
			newItem: {...this.state.newItem, title: event.target.value}
		});
	}

	render() {
		const { onCreate } = this.props;
		return (
			<div className="item">
				<span className="title">
					<input type="text" onChange={this.onTitleChange.bind(this)}></input>
				</span>
				<span className="buttons">
					<button className="create" onClick={() => onCreate(this.state.newItem)}>+</button>
				</span>
			</div>
		)
	}
}
