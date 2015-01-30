/** @jsx React.DOM */

import { CHANGE } from 'constants/ChoreConstants';
import Chore from 'components/Chore';
import ChoreStore from 'stores/ChoreStore';
import ListGroup from 'react-bootstrap/ListGroup';
import Panel from 'react-bootstrap/Panel';
import React from 'react';

var ChoreList = React.createClass({

	getInitialState: function() {
		return {
		    chores: ChoreStore.getAllChores()
	    };
	},

	componentDidMount: function() {
		ChoreStore.addListener(CHANGE, this._onChange);
	},

	componentWillUnmount: function() {
		ChoreStore.removeListener(CHANGE, this._onChange);
	},

	choreItem: function(chore) {
		return <Chore chore={chore} />
	},

	render: function() {
		return (
			<Panel bsStyle='primary' header='Active Chores'>
				<ListGroup>{this.state.chores.map(this.choreItem)}</ListGroup>
			</Panel>
		);
	},

	_onChange: function() {
		this.setState({
			chores: ChoreStore.getAllChores()
		});
	}
});

export default ChoreList;
