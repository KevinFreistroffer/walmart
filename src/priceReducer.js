// import tyhpes of actions
import { APPLY_PROMO_CODE } from './types';

const initialState = {
	promoCode: '',
	discountAmount: 0,
	validPromoCode: false
};

const priceReducers = (state = initialState, action) => {
	switch(action.type) {
		case APPLY_PROMO_CODE:
			console.log(`[PriceReducer] case ${APPLY_PROMO_CODE} `, action.payload.validPromoCode);

			return {
				...state,
				discountAmount: action.payload.discountAmount,
				validPromoCode: action.payload.validPromoCode
			}

		default:
			console.log(`[PriceReducer] case default`);
			return {
				...state
			}
	} 
}

export default priceReducers;