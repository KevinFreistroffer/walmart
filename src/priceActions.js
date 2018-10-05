import {
	APPLY_PROMO_CODE
} from './types';


export const applyPromoCode = (isValid, discountAmount) => {

	if ( isValid ) {
		// take the price/sale price multiple by discount %
		// return new price value
	}


	return {
		type: APPLY_PROMO_CODE,
		payload: {
			discountAmount,
			validPromoCode: isValid
		}
	}
};