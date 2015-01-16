/** @jsx React.DOM */

require.config({
  paths: {
    'react': '../bower_components/react/react',
    'react-bootstrap': '../bower_components/react-bootstrap',
  }
});

require([
	'react',
	'react-bootstrap/TabbedArea',
	'react-bootstrap/TabPane',
	'react-bootstrap/Input',
	'react-bootstrap/Button',
	'react-bootstrap/Col',
	'react-bootstrap/ListGroupItem',
	'react-bootstrap/ListGroup',
	'react-bootstrap/Panel',
	'react-bootstrap/Badge'
],
function(
	React,
	TabbedArea,
	TabPane,
	Input,
	Button,
	Col,
	ListGroupItem,
	ListGroup,
	Panel,
	Badge
) {
	React.initializeTouchEvents(true)

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


	var Chore = React.createClass({
		styles: ['info', 'success', 'danger'],

		getInitialState: function() {
			return {counter: 0};
		},

		choreClicked: function() {
			var counter = this.state.counter;
			counter++;
			counter = counter % 3;
			this.setState({counter: counter});
		},

		getStyle: function() {
			return this.styles[this.state.counter];
		},

		getInitialState: function() {
			return {counter: 0};
		},

		render: function() {
			return (
				<ListGroupItem
					onClick={this.choreClicked}
					bsStyle={this.getStyle()}
					className='no-selection'>
						<strong>{this.props.chore.name}</strong>
						<span> {this.props.chore.points} pts</span>
				</ListGroupItem>
			);
		}
	})


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


	var PointsPanel = React.createClass({
		render: function() {
			return (
				<Panel bsStyle='primary' header='Points'>
					<Badge className='points'>63</Badge>
				</Panel>
			)
		}
	})


	var AdultTab = React.createClass({

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


	var ChildTab = React.createClass({
		render: function() {
			return (
				<div>
					<ChoreList />
				</div>
			);
		}
	});


	var mountNode = document.getElementById('content');


	var tabbedAreaInstance = (
	    <TabbedArea defaultActiveKey={1}>
	      <TabPane eventKey={1} tab='Ashton'><AdultTab /></TabPane>
	      <TabPane eventKey={2} tab='Tonia'><AdultTab /></TabPane>
	      <TabPane eventKey={3} tab='Josh'><AdultTab /></TabPane>
	    </TabbedArea>
	  );

	React.render(tabbedAreaInstance, mountNode);

});
