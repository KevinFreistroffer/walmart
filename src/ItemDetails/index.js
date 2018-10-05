import React, { Component}from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.css';

let showItemDetails = false;

const ItemDetails = (props) => {

	let toggleIcon;
	let slashedPrice;
	let currentPrice = 0;

	toggleIcon = props.showItemDetails ? <span className="toggle-plus-minus">+</span> : <span>-</span>;

	if (props.salePrice !== 0 && props.salePrice <= props.price) {
		currentPrice = props.salePrice;
		slashedPrice = <div className="item--slashed-price">{props.price}</div>
	} else {
		currentPrice = props.price;
	}

	
	return(
		<div className="item-details item-border-bottom" styles={styles}>
			<h1 onClick={ props.handleToggleItemDetails } className="toggle-item-details">See item details {toggleIcon}</h1>
			<div className={ `item ${ props.showItemDetails ? 'show-item-details' : ''  }` }>
				<div className="item--image">
					<img className="item--image" src={`src/imgs/${props.imagePath}`}/>
				</div>
				{ /* TODO come up with a different name, because it is similarly used as the component class name? */}
				<div className="item--details">
					<div className="item--name">{props.name}</div>
					<div className="item--type">{props.type}</div>
					<div className="item--style">{props.style}</div> 
					<div className="item--description">{props.description}</div> 
					<div className="item--price-quantity">
						<div className="item--price">${currentPrice}</div>			
						<div className="item--quantity">Qty: {props.quantity}</div>
					</div>	
					{slashedPrice}	
				</div>
			</div>
		</div>
	);
	
};

let toggleItemDetails = () => {
	console.log(`toggleItemDetails()`);

	showItemDetails = !showItemDetails;
	console.log(showItemDetails);
};

export default ItemDetails;

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