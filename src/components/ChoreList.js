/** @jsx React.DOM */

import Chore from 'components/Chore';
import ChoreStore from 'stores/ChoreStore';
import ListGroup from 'react-bootstrap/ListGroup';
import Panel from 'react-bootstrap/Panel';
import React from 'react';

var ChoreList = React.createClass({

	choreItem: function(chore) {
		return <Chore chore={chore} />
	},

	render: function() {
		return (
			<Panel bsStyle='primary' header={this.props.title}>
				<ListGroup>{this.props.chores.map(this.choreItem)}</ListGroup>
			</Panel>
		);
	}
});

export default ChoreList;
