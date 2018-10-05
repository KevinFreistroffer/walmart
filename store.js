import { applyMiddlware, combineReducers } from 'react-redux';
import { createStore } from 'redux;	 
import react from 'react';
import priceReducers from './priceReducer';
import itemReducers from './itemReducers';

 
const rootReducer = combineReducers({
	priceReducers,
	itemReducers
});

const initialState = {
	priceReducers: {
		price: '1.23'
	},
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

export let store = createStore({
	rootReducer,
	initialState
});