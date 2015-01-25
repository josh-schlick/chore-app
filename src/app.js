/** @jsx React.DOM */

var $ = require('jquery');
var React = require('react');
var TabbedArea = require('react-bootstrap/TabbedArea');
var TabPane = require('react-bootstrap/TabPane');
var UserTab = require('components/UserTab');


React.initializeTouchEvents(true);

var mountNode = document.getElementById('content');

	var tabbedAreaInstance = (
		<TabbedArea defaultActiveKey={1}>
		  <TabPane eventKey={1} tab='Ashton'><UserTab /></TabPane>
		  <TabPane eventKey={2} tab='Tonia'><UserTab /></TabPane>
		  <TabPane eventKey={3} tab='Josh'><UserTab /></TabPane>
		</TabbedArea>
	  );

React.render(tabbedAreaInstance, mountNode);
