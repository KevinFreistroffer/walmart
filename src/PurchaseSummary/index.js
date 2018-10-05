import React, { Component}from 'react';
import { connect } from 'react-redux';
import { applyPromoCode } from '../priceActions';
import { setCartItem } from '../itemActions';
import { APPLY_PROMO_CODE } from '../types';
import Pricing from '../Pricing';
import ItemDetails from '../ItemDetails';
import PromoCode from '../PromoCode';
import * as styles from './styles.css';

 class PurchaseSummary extends Component {
	constructor(props) {
		super(props);

		//  Given this task is using Redux, should should probably all be in a redux store.
		// TODO!
		this.state = {
			showModal: false,
			showItemDetails: false,
			showPromoCode: false,
		}
		
		this.handleToggleItemDetails = this.handleToggleItemDetails.bind(this);
		this.handleTogglePromoCode   = this.handleTogglePromoCode.bind(this);
		this.applyPromoCode          = this.applyPromoCode.bind(this);
	}


	componentDidMount() {

		let cartItem = {
			name: 'Essentials by OFM',
			type: 'ESS-3085 Racing',
			style: 'Style Leather',
			description: 'Gaming Chair, red',
			price: 102.96,
			salePrice: 99.99,
			quantity: '1',
			imagePath: 'chair.jpeg',
			promoCode: 'DISCOUNT',
			discountAmount: .10,
			validPromoCode: false
		}
		this.props.setCartItem( cartItem );
	}



	applyPromoCode() {

		let currentPrice;
		let discount;

		if (this.state.salePrice <= this.state.price) {
			discount === this.state.salePrice * 0.10;
			currentPrice = this.state.salePrice;
		}
		else {
			currentPrice = this.state.price;
			discount === this.state.price * 0.10;
		}

		this.props.applyPromoCode(currentPrice, discount);

	}



	handleToggleItemDetails() {
		this.setState({
			showItemDetails: !this.state.showItemDetails
		}, () => console.log(this.state.showItemDetails));
	}



	handleTogglePromoCode() {
		console.log(`handleTogglePromoCode()`);
		this.setState({
			showPromoCode: !this.state.showPromoCode
		}, () => console.log(`this.state.promoCode`, this.state.showPromoCode));
	}	



	render() {		

		const { 
			name, 
			type, 
			style, 
			description, 
			price, 
			salePrice, 
			quantity,
			promoCode, 
			imagePath,
			discountAmount } = this.props.item;
		let itemPrice;
		let savingsAmount = 0;

		// Calculate how much is saved based on sale price
		if ( salePrice !== 0 && salePrice <= price ) {
			savingsAmount = parseFloat(price - salePrice).toFixed(2);
		}	


		return(
			<div className="purchase-summary" styles={styles}>
				<Pricing price={price}  pickupSavings={savingsAmount}></Pricing>
				<ItemDetails 
					name={name} 
					type={type}
					style={style}
					description={description}
					price={this.props.item.price}
					salePrice={this.props.item.salePrice}
					quantity={quantity}
					promoCode={promoCode}
					discountAmount={discountAmount}
					showItemDetails={this.state.showItemDetails}
					showModal={this.state.showModal} 
					handleToggleItemDetails={ this.handleToggleItemDetails }
					imagePath={imagePath}></ItemDetails>
				<PromoCode promoCode={promoCode} 
						   validPromoCode={this.props.validPromoCode}
						   discountAmount={this.props.discountAmount}
				 		   showPromoCode={this.state.showPromoCode} 
						   handleTogglePromoCode={this.handleTogglePromoCode}></PromoCode>
			</div>
		);
	}
};


let mapStateToProps = (state) => {
	return {
		item: state.itemReducers
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		setCartItem: item => { dispatch( setCartItem(item) )}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);