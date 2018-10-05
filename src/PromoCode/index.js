import React, { Component}from 'react';
import { connect } from 'react-redux';
import { applyPromoCode } from '../itemActions';
import * as styles from './styles.css';

let showPromoCode = false;

class PromoCode extends Component {

	toggleIcon;

	constructor(props) {
		super(props);

		this.state = {
			promoCode: '',
			validPromoCode: false
		}

		this.togglePromoCode = this.togglePromoCode.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.applyPromoCode = this.applyPromoCode.bind(this);
	}


	componentDidMount() {
		console.log(this.props.validPromoCode, `[PromoCode]`);
		if ( this.props.showPromoCode ) {
			this.toggleIcon = <span className="toggle-plus-minus">+</span>
		} else {
			this.toggleIcon = <span>-</span>
		}

		if ( this.props.validPromoCode ) { 
			console.log(`[PromoCode] this.props.validPromoCode`);
		} 
	}


	togglePromoCode() {
		console.log('togglePromoCode()');

		showPromoCode = !showPromoCode;

		console.log(showPromoCode);
	};



	handleOnChange(e) {

		let promoCode = e.target.value;
		let validPromoCode = e.target.value === this.props.promoCode;
		console.log(this.props.promoCode);

		this.setState({ 
			promoCode,
			validPromoCode 
		}, console.log(validPromoCode));
	}


	applyPromoCode() {
		let currentPrice;
		let discount = 0;
		let priceType = '';

		// Item is on sale
		// TODO add a onSale boolean to store
		if (this.props.item.salePrice <= this.props.item.price) {
			priceType = 'salePrice';
			console.log(this.props.item.salePrice, typeof this.props.item.salePrice, this.props.item.discountAmount);
			discount === this.props.item.salePrice * this.props.item.discountAmount;
			currentPrice = this.props.item.salePrice;
		}
		// Not on sale
		else {
			priceType = 'price';
			currentPrice = this.props.item.price;
			discount === this.props.item.price * this.props.item.discountAmount;
		}
	
		this.props.applyPromoCode({ type: priceType, amount: currentPrice }, discount);
	}


	render() {

		return(
			<div className="promo-code"> 
				<h1 onClick={ this.props.handleTogglePromoCode } className="toggle-promo-code">Apply promo code {this.toggleIcon}</h1>
				<div className={ `promo-code-group ${ this.props.showPromoCode ? 'show-promo-code' : ''}` }>
					<label htmlFor="promo-code-input">Promo code
					<input id="promo-code-input" 
				       	   type="text" 
				           name="promo-code"  
				           value={this.state.promoCode} 
				           onChange={ this.handleOnChange }
			               placeholder="" /></label>
					<button type="button" onClick={this.applyPromoCode}>Apply</button>	
				</div>
			</div>
		);
	}	
};


let mapStateToProps = (state) => {
	return {
		item: state.itemReducers
	}
}; 

let mapDispatchToProps = (dispatch) => {
	return {
		applyPromoCode: (price, discount) => { dispatch(applyPromoCode(price, discount)) }
	}
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);