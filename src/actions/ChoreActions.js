define([
	'AppDispatcher',
	'constants/ChoreConstants'
],
function(
	AppDispatcher,
	ChoreConstants
) {

	var ChoreActions = {
		create: function(chore) {
			console.log('ChoreActions create');
			AppDispatcher.dispatch({
				actionType: ChoreConstants.CREATE,
				chore: chore
			})
		}
	};

	return ChoreActions;
});
