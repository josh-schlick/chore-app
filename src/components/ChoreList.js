/** @jsx React.DOM */

define([
	'components/Chore',
	'react',
	'react-bootstrap/ListGroup',
	'react-bootstrap/Panel'
],
function(
	Chore,
	React,
	ListGroup,
	Panel
) {

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

	return ChoreList;
});
