import {
	SET_CART_ITEM,
	APPLY_PROMO_CODE
} from './types';


export const setCartItem = item => {

	console.log(`[ItemActions] setCartItem`, item);
	return {
		type: SET_CART_ITEM,
		payload: {
			item
		}
	}
};

export const applyPromoCode = (price, discount) => {

	console.log(`[ItemActions] applyPromoCode`, price, discount);

	console.log(price.amount, discount);
	let newPrice = price.amount - discount;


	console.log(newPrice);


	return {
		type: APPLY_PROMO_CODE,
		payload: {
			price: {
				type: price.type,
				amount: newPrice
			}
		}
	}
};