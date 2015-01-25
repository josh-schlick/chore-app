/** @jsx React.DOM */

import AddChore from 'components/AddChore';
import Badge from 'react-bootstrap/Badge';
import ChoreList from 'components/ChoreList';
import Panel from 'react-bootstrap/Panel';
import React from 'react';

var UserTab = React.createClass({

	x: function(response) {
		console.log(JSON.parse(response));
		this.setState({chores: JSON.parse(response)});
	},

	getInitialState: function() {
		$.ajax({
			url: '/list',
			type: 'GET',
			success: this.x
		});
		return {chores: []};
	},

	handleChoreSubmit: function(chore) {
		var chores = this.state.chores;
		chores.push(chore);
		this.setState({chores: chores});
	},

	render: function() {
		return (
			<div>
				<AddChore onChoreSubmit={this.handleChoreSubmit}/>
				<p />
				<ChoreList title='Active Chores' chores={this.state.chores}/>
				<p />
				<PointsPanel/>
			</div>
		);
	}
});

var PointsPanel = React.createClass({
	render: function() {
		return (
			<Panel bsStyle='primary' header='Points'>
				<Badge className='points'>63</Badge>
			</Panel>
		)
	}
});

export default UserTab;
