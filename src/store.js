import { applyMiddlware } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import react from 'react';
import priceReducers from './priceReducer';
import itemReducers from './itemReducers';


const rootReducer = combineReducers({
	priceReducers,
	itemReducers
});

const initialState = {
	priceReducers: {
		subTotal: 0,
		pickupSavings: 0,
		taxesAndFees: 0,
		estimatedTotal: 0
	},
	itemReducers: {
		name: '',
		description: '',
		price: '',
		quantity: 0,
		price: 0
	}
}

export let store = createStore(
	rootReducer,
	initialState
);