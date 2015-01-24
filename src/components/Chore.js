/** @jsx React.DOM */

define([
	'react',
	'react-bootstrap/Button',
	'react-bootstrap/Glyphicon',
	'react-bootstrap/ListGroupItem'
],
function(
	React,
	Button,
	Glyphicon,
	ListGroupItem
) {

	var Chore = React.createClass({
		getInitialState: function() {
			return {choreColor: 'info'};
		},

		done: function() {
			this.setState({choreColor: 'success'});
		},

		skip: function() {
			this.setState({choreColor: 'danger'});
		},

		render: function() {
			return (
				<ListGroupItem
					onClick={this.choreClicked}
					bsStyle={this.state.choreColor}
					className='no-selection'>
						<strong>{this.props.chore.name}</strong>
						<span> {this.props.chore.points} pts</span>
						<Button
						  onClick={this.skip}
						  bsStyle='danger'
						  className='chore-button'>
							<Glyphicon glyph='remove' />
						</Button>
						<Button
						  onClick={this.done}
						  bsStyle='success'
						  className='chore-button'>
							<Glyphicon glyph='ok' />
						</Button>
				</ListGroupItem>
			);
		}
	});

	return Chore;
});
