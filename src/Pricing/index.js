import React, { Component}from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.css';

let showPickupSavingsModal = false;


const Pricing = (props) => {

	let total = 0;
	let taxRate = 0.08;
	let taxesAndFees = 0; 
	let price = 0;	
	let pickupSavings;
	let savingsAmount = 0;

	// If savings value ... then the item is on sale
	if ( props.pickupSavings > 0 ) {
		pickupSavings = (
			<div className="pricing-line pricing--pickup-savings">
				<span className="label">Pickup Savings</span> 
				<span>-${props.pickupSavings}</span>
			</div>
		); 
	}

	taxesAndFees = (props.price * taxRate).toFixed(2);
	taxesAndFees = parseInt(taxesAndFees);

	total = ( props.price + taxesAndFees ) - props.pickupSavings;
	console.log(props.price, taxesAndFees);	

	return(
		<div className="pricing" styles={styles}>
			<div className="pricing-line pricing--subtotal">Subtotal <span>${props.price}</span></div>
			{pickupSavings}
			<div className="pricing-line pricing--taxes-fees">
				<span className="label">
					Est taxes & fees <br />
					<span className="based-on-zipcode">(Based on 94085)</span>
				</span> 
				<span>${taxesAndFees}</span>
			</div>
			<div className="pricing-line pricing--total">Est. Total <span>{total}</span></div>			
		</div>
	);
	
};

let togglePickupSavingsModal = () => {
	console.log(`togglePickupSavingsModal()`);

	showPickupSavingsModal = !showPickupSavingsModal;
	console.log(showPickupSavingsModal);
};

export default Pricing;

// const mapStateToProps = state => {
// 	return {
// 		price: state.priceReducers.price
// 	}
// };


// const mapDispatchToProps = dispatch => {
// 	return {
// 		// setPrice: (price) => { dispatch(setPrice(price)) },
// 		// getPrice: () => { dispatch(getPrice()) },
// 	}
// };


// export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);