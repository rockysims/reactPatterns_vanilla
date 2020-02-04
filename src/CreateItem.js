import React, { Component } from 'react';

export default class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: this.buildNewItem('')
		};
	}

	buildNewItem(title) {
		return {
			userId: 1,
			title: title,
			completed: false
		};
	}

	onClickCreate() {
		this.props.onCreate(this.state.newItem);
		this.state.newItem = this.buildNewItem(this.state.newItem.title);
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
					<button className="create" onClick={this.onClickCreate.bind(this)}>+</button>
				</span>
			</div>
		)
	}
}
