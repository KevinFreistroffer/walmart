// import tyhpes of actions
import { 
	SET_NAME, 
	SET_DESCRIPTION, 
	SET_PRICE 
}

from './types';

const initialState = {
	name: '',
	description: '',
	price: ''				
};

const itemReducers = (state = initialState, action) => {
	switch(action.type) {
		case SET_NAME:
			console.log(`[ItemReducers] case ${SET_NAME}`);
			return {
				...state,
				price: action.payload.price
			}
	case SET_DESCRIPTION:
			console.log(`[ItemReducers] case ${SET_DESCRIPTION}`);
			return {
				...state,
				price: action.payload.price
			}
	case SET_PRICE:
			console.log(`[ItemReducers] case ${SET_PRICE}`);
			return {
				...state,
				price: action.payload.price
			}

	default:
		console.log(`[ItemReducers] case default`);
		return {
			...state
		}
	} 
}

export default itemReducers;