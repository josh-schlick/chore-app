/** @jsx React.DOM */

import AddChore from 'components/AddChore';
import Badge from 'react-bootstrap/Badge';
import ChoreList from 'components/ChoreList';
import Panel from 'react-bootstrap/Panel';
import React from 'react';

var UserTab = React.createClass({

	render: function() {
		return (
			<div>
				<AddChore/>
				<p />
				<ChoreList/>
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
