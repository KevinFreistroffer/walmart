import { applyMiddlware } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import react from 'react';
import priceReducers from './priceReducer';
import itemReducers from './itemReducers';


const rootReducer = combineReducers({
	itemReducers
});

const initialState = {
	// priceReducers: {
	// 	promoCode: '',
	// 	discountAmount: 0,
	// 	validPromoCode: false
	// },
	itemReducers: {
		name: '',
		type: '',
		style: '',
		description: '',
		price: 0,
		salePrice: 0,
		quantity: '',
		imagePath: '',
		promoCode: '',
		discountAmount: .0,
		validPromoCode: false
	}
}

export let store = createStore(
	rootReducer,
	initialState
);