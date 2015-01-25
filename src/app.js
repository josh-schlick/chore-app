/** @jsx React.DOM */


define([
	'jquery',
	'react',
	'react-bootstrap/TabbedArea',
	'react-bootstrap/TabPane',
	'components/UserTab'
],
function(
	$,
	React,
	TabbedArea,
	TabPane,
	UserTab
) {
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
});