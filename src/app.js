/** @jsx React.DOM */

require.config({
	paths: {
		'actions': './actions',
		'AppDispatcher': 'dispatcher/AppDispatcher',
		'components': './components',
		'constants': './constants',
		'flux': '../bower_components/flux/dist/Flux',
		'react': '../bower_components/react/react',
		'react-bootstrap': '../bower_components/react-bootstrap',
		'stores': './stores'
	}
});

require([
	'components/UserTab',
	'react',
	'react-bootstrap/TabbedArea',
	'react-bootstrap/TabPane'

],
function(
	UserTab,
	React,
	TabbedArea,
	TabPane
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
