// import tyhpes of actions
import { APPLY_PROMO_CODE, SET_CART_ITEM } from './types';

const initialState = {
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
};

const itemReducers = (state = initialState, action) => {
	switch(action.type) {
		case SET_CART_ITEM:
			return {
				...state, 
				name: action.payload.item.name,
				type: action.payload.item.type,
				style: action.payload.item.style,
				description: action.payload.item.description,
				price: action.payload.item.price,
				salePrice: action.payload.item.salePrice,
				quantity: action.payload.item.quantity,
				imagePath: action.payload.item.imagePath,
				promoCode: action.payload.item.promoCode,
				discountAmount: action.payload.item.discountAmount,
				validPromoCode: action.payload.item.validPromoCode
			}

		case APPLY_PROMO_CODE:
			console.log(action.payload.price);
			let priceType = '';

			if (action.payload.price.type === 'price') {
				priceType = 'price';
			} else {
				priceType = 'salePrice';
			}


			console.log(typeof action.payload.price.amount);
			return {
				...state,
				[priceType]: action.payload.price.amount 
			}

		default:
			console.log(`[ItemReducer] case default`);
			return {
				...state
			}
	} 
}

export default itemReducers;