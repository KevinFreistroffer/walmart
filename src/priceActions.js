import {
	SET_PRICE,
	GET_PRICE
} from './types';


export const setPrice = price => {
	return {
		type: SET_PRICE,
		payload: price
	}
};

export const getPrice = price => {
	return {
		type: GET_PRICE
	}
};