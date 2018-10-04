// import tyhpes of actions
import { SET_PRICE, GET_PRICE } from './types';

const initialState = {
	subTotal: 0,
	pickupSavings: 0,
	taxesAndFees: 0,
	estimatedTotal: 0
};

const priceReducers = (state = initialState, action) => {
	switch(action.type) {
		case SET_PRICE:
		console.log(`[PriceReducer] case ${SET_PRICE}`);
		return {
			...state,
			price: action.payload.price
		}
		default:
			console.log(`[PriceReducer] case default`);
			return {
				...state
			}
	} 
}

export default priceReducers;


// All of this point being  a action is called that does things. then the reducer returns a new version of the store.

// More importantly is it's going to be alright once I chill out again for a month.