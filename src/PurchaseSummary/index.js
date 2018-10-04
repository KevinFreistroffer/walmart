import React, { Component}from 'react';
import { connect } from 'react-redux';
import { getPrice, setPrice } from '../priceActions';
import { GET_PRICE, SET_PRICE } from '../types';
import Pricing from '../Pricing';
import ItemDetails from '../ItemDetails';
import PromoCode from '../PromoCode';
import * as styles from './styles.css';

 class PurchaseSummary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			showItemDetails: false,
			showPromoCode: false,
			item: {
				name: 'Essentials by OFM',
				type: 'ESS-3085 Racing',
				style: 'Style Leather',
				description: 'Gaming Chair, red',
				price: 10.05,
				salePrice: 5.00,
				quantity: '1',
				imagePath: 'chair.jpeg',
				promoCode: 'DISCOUNT'
			}
		}

		this.handleToggleItemDetails = this.handleToggleItemDetails.bind(this);
		this.handleTogglePromoCode   = this.handleTogglePromoCode.bind(this);
	}



	componentDidMount() {
			
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
			imagePath } = this.state.item;
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
					price={price}
					salePrice={salePrice}
					quantity={quantity}
					promoCode={promoCode}
					showItemDetails={this.state.showItemDetails}
					showModal={this.state.showModal} 
					handleToggleItemDetails={ this.handleToggleItemDetails }
					imagePath={imagePath}></ItemDetails>
				<PromoCode promoCode={this.state.promoCode} showPromoCode={this.state.showPromoCode} 
						   handleTogglePromoCode={this.handleTogglePromoCode}></PromoCode>
			</div>
		);
	}
};



const mapStateToProps = state => {
	return {
		price: state.priceReducers.price
	}
};
const mapDispatchToProps = dispatch => {
	return {
		setPrice: (price) => { dispatch(setPrice(price)) },
		getPrice: () => { dispatch(getPrice()) },
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(PurchaseSummary);