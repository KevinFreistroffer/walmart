import { applyMiddlware, combineReducers } from 'react-redux';
import { createStore } from 'redux;	 
import react from 'react';
import priceReducers from './priceReducer';

 
const rootReducer = combineReducers({
	priceReducers
});

const initialState = {
	priceReducers: {
		price: '1.23'
	}
}

export let store = createStore({
	rootReducer,
	initialState
});