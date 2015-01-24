/** @jsx React.DOM */

define([
	'react',
	'react-bootstrap/Button',
	'react-bootstrap/Input',
	'react-bootstrap/Panel'
],
function(
	React,
	Button,
	Input,
	Panel
) {

	var AddChore = React.createClass({
		addChore: function() {
			var chore = {'name': this.refs.name.getValue(), 'points': parseInt(this.refs.points.getValue(), 10)};
			this.props.onChoreSubmit(chore);
			this.refs.name.getInputDOMNode().value = '';
			this.refs.points.getInputDOMNode().value = '';
			$.ajax({
				url: '/chore',
				type: 'POST',
				data: chore,
				success: console.log('added!')
			});
		},
		render: function() {
			return (
				<Panel bsStyle='primary' header='Add a new chore'>
					<Input type='text' ref='name' label='Chore name' />
					<Input type='number' ref='points' label='Points' />
					<Button
					  bsStyle='primary'
					  onClick={this.addChore}>
						Add
					</Button>
				</Panel>
			);
		}
	});

	return AddChore;
});
