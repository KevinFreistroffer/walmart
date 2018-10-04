import React, { Component } from 'react';
import * as styles from './styles.css';

const PickupSavingsModal = (props) => {
	console.log(`props.showModal`, props.showModal);

	return(
		<div className={ `pickup-savings-modal ${ props.showModal ? 'show-pickup-savings-modal' : '' }`}>
			At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
			praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
			excepturi sint occaecati cupiditate non provident.
		</div>
	);
}

export default PickupSavingsModal;

