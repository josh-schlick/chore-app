import AppDispatcher from 'dispatcher/AppDispatcher';
import { CREATE } from 'constants/ChoreConstants';

var _chores = {};

var create = function(chore) {
	var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

	$.ajax({
		url: '/chore',
		type: 'POST',
		data: chore,
		success: console.log('added dude!')
	});

	_chores[id] = chore;
};

var handleAction = function(action) {
	console.log('ChoreStore: handleAction');
	switch(action.actionType) {
		case CREATE:
			create(action.chore);
			break;
		default:
			// nothing
	}
};

AppDispatcher.register(handleAction);
