import React, { Component}from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.css';

let showPromoCode = false;

const PromoCode = (props) => {

	let toggleIcon;

	if ( props.showPromoCode ) {
		toggleIcon = <span className="toggle-plus-minus">+</span>
	} else {
		toggleIcon = <span>-</span>
	}


	return(
		<div className="promo-code"> 
			<h1 onClick={ props.handleTogglePromoCode } className="toggle-promo-code">Apply promo code {toggleIcon}</h1>
			<div className={ `promo-code-group ${ props.showPromoCode ? 'show-promo-code' : ''}` }>
				<label htmlFor="promo-code-input">Promo code
				<input id="promo-code-input" 
			       	   type="text" 
			           name="promo-code"  
			           value={props.promoCode} 
			           onChange={ () => { handleOnChange() } }
		               placeholder="" /></label>
				
				<button type="button" onClick={applyPromoCode}>Apply</button>	
			</div>
		</div>
	);
	
};



let handleOnChange = (e) => {
	console.log(e.target.value);
};



let togglePromoCode = () => {
	console.log('togglePromoCode()');

	showPromoCode = !showPromoCode;

	console.log(showPromoCode);
};



let applyPromoCode = (code) => {
	
};

export default PromoCode;