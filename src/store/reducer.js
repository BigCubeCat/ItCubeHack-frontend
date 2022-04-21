import * as actions from './actionTypes';

const defaultState = {
	user: {
		name: "",
		password: "",
		is_admin: false
	}
}

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case actions.Types.LOGIN:
			return {...state,
				user: action.payload.user
			};
		case actions.Types.REGISTER:
			return {...state,
				user: action.payload.user
			};
		case actions.Types.LOGOUT:
			return defaultState
		default:
			return state;
	}
}