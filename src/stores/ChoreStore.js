import { CHANGE, CREATE } from 'constants/ChoreConstants';
import assign from 'object-assign';
import AppDispatcher from 'dispatcher/AppDispatcher';
import events from 'events';


var _chores = [];

var setStateFromServer = function() {
	$.ajax({
		url: '/list',
		type: 'GET',
		success: function(response) {
			console.log('initial list from server');
			_chores = JSON.parse(response);
			ChoreStore.emitChange();
		}
	});
};

var create = function(chore) {
	// var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	$.ajax({
		url: '/chore',
		type: 'POST',
		data: chore,
		success: console.log('added dude!')
	});

	_chores.push(chore);
	ChoreStore.emitChange();
};

AppDispatcher.register(function(action) {
	console.log('ChoreStore: handleAction');
	switch(action.actionType) {
		case CREATE:
			create(action.chore);
			break;
		default:
			// nothing
	}
});

var ChoreStore =assign({}, events.EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE);
	},

	getAllChores: function() {
		return _chores;
	}
});

setStateFromServer();

export default ChoreStore;
