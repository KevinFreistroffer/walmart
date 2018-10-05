import React, { Component}from 'react';
import { connect } from 'react-redux';
import PickupSavingsModal from '../PickupSavingsModal';
import * as styles from './styles.css';

// TODO should be converted to class to use state


class Pricing extends Component {


	total = 0;
	taxRate = 0.08;
	taxesAndFees = 0; 
	price = 0;	
    pickupSavings;
	savingsAmount = 0;
	savingsHasDecimals;
	showPickupSavingsModal = false;

	constructor(props) {
		super(props);

		this.state = {
			showPickupSavingsModal: false
		}

		this.togglePickupSavingsModal = this.togglePickupSavingsModal.bind(this);
	}



	componentDidMount() {

	}


	togglePickupSavingsModal() {
		console.log(`togglePickupSavingsModal()`);

		this.setState({
			showPickupSavingsModal: !this.state.showPickupSavingsModal
		});

	};


	render() {

		let pickupSavings;

		if (this.props.pickupSavings) {
			pickupSavings = (
				<div className="pricing-line pricing--pickup-savings" onClick={ this.togglePickupSavingsModal }>
					<span className="label">Pickup Savings</span> 
					<span>-${this.props.pickupSavings}</span>
					<PickupSavingsModal showModal={this.state.showPickupSavingsModal}></PickupSavingsModal>
				</div>
			); 
		}


		this.axesAndFees = (this.props.price * this.taxRate).toFixed(2);
		this.taxesAndFees = new Number( parseFloat(this.taxesAndFees).toFixed(2) );
		this.savingsAmount = new Number( parseFloat(this.props.pickupSavings).toFixed(2));
		this.total = parseFloat(( this.props.price + this.taxesAndFees ) - this.savingsAmount ).toFixed(2);
		this.taxesAndFees = parseFloat(this.taxesAndFees).toFixed(2);

		return(
			<div className="pricing" styles={styles}>
				<div className="pricing-line pricing--subtotal">Subtotal <span>${this.props.price.toFixed(2)}</span></div>
				{pickupSavings}
				<div className="pricing-line pricing--taxes-fees">
					<span className="label">
						Est taxes & fees <br />
						<span className="based-on-zipcode">(Based on 94085)</span>
					</span> 
					<span>${this.taxesAndFees}</span>
				</div>
				<div className="pricing-line pricing--total">Est. Total <span>${this.total}</span></div>			
			</div>
		);	
		
	}
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






































// import React, { Component}from 'react';
// import { connect } from 'react-redux';
// import PickupSavingsModal from '../PickupSavingsModal';
// import * as styles from './styles.css';

// // TODO should be converted to class to use state

// let showPickupSavingsModal = false;

// const Pricing = (props) => {

// 	let total = 0;
// 	let taxRate = 0.08;
// 	let taxesAndFees = 0; 
// 	let price = 0;	
// 	let pickupSavings;
// 	let savingsAmount = 0;
// 	let savingsHasDecimals;

// 	if (props.pickupSavings) {
// 		pickupSavings = (
// 			<div className="pricing-line pricing--pickup-savings" onClick={ togglePickupSavingsModal }>
// 				<span className="label">Pickup Savings</span> 
// 				<span>-${props.pickupSavings}</span>
// 				<PickupSavingsModal showModal={false}></PickupSavingsModal>
// 			</div>
// 		); 
// 	}


// 	taxesAndFees = (props.price * taxRate).toFixed(2);
// 	taxesAndFees = new Number( parseFloat(taxesAndFees).toFixed(2) );
// 	savingsAmount = new Number( parseFloat(props.pickupSavings).toFixed(2) );
// 	total = parseFloat(( props.price + taxesAndFees ) - savingsAmount ).toFixed(2);
// 	taxesAndFees = parseFloat(taxesAndFees).toFixed(2);

// 	console.log(`fjlsdajfka`, props.price, typeof props.price);

// 	return(
// 		<div className="pricing" styles={styles}>
// 			<div className="pricing-line pricing--subtotal">Subtotal <span>${props.price.toFixed(2)}</span></div>
// 			{pickupSavings}
// 			<div className="pricing-line pricing--taxes-fees">
// 				<span className="label">
// 					Est taxes & fees <br />
// 					<span className="based-on-zipcode">(Based on 94085)</span>
// 				</span> 
// 				<span>${taxesAndFees}</span>
// 			</div>
// 			<div className="pricing-line pricing--total">Est. Total <span>${total}</span></div>			
// 		</div>
// 	);
	
// };

// let togglePickupSavingsModal = () => {
// 	console.log(`togglePickupSavingsModal()`);

// 	showPickupSavingsModal = !showPickupSavingsModal;
// 	console.log(showPickupSavingsModal);
// };

// export default Pricing;

// // const mapStateToProps = state => {
// // 	return {
// // 		price: state.priceReducers.price
// // 	}
// // };


// // const mapDispatchToProps = dispatch => {
// // 	return {
// // 		// setPrice: (price) => { dispatch(setPrice(price)) },
// // 		// getPrice: () => { dispatch(getPrice()) },
// // 	}
// // };


// // export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);