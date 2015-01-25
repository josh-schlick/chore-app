import AppDispatcher from 'dispatcher/AppDispatcher';
import { CREATE } from 'constants/ChoreConstants';

var ChoreActions = {
	create: function(chore) {
		console.log('ChoreActions create');
		AppDispatcher.dispatch({
			actionType: CREATE,
			chore: chore
		})
	}
};

export default ChoreActions;
