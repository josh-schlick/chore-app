/** @jsx React.DOM */

import $ from 'jquery';
import React from'react';
import TabbedArea from 'react-bootstrap/TabbedArea';
import TabPane from 'react-bootstrap/TabPane';
import UserTab from 'components/UserTab';


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
