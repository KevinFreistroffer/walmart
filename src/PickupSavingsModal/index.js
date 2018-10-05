import React, { Component } from 'react';
import * as styles from './styles.css';

const PickupSavingsModal = (props) => {


	return(
		<div className={ `pickup-savings-modal ${ props.showModal ? 'show-pickup-savings-modal' : '' }`} styles={styles}>
			Picking up your oder in the store helps cut costs, and we pass the savings on to you.
		</div>
	);
}

export default PickupSavingsModal;

