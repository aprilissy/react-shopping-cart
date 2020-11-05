import React from 'react';

const Item = props => {
	console.log('props.index Cart',props.index);
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button id='button' onClick={() => props.removeItem(props.index)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;