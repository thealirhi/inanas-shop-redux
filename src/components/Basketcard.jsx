import React from 'react';
import { shortenText } from '../helpers/helper.js';
import { MdDeleteOutline } from 'react-icons/md';

import styles from './BasketCard.module.css';
import { useDispatch } from 'react-redux';
import { decrease, increase, removeItem } from '../features/cart/cartSlice.js';

function BasketCard({ data }) {
	const { image, title, quantity } = data;

	const dispatch = useDispatch();

	return (
		<div className={styles.card}>
			<img
				src={image}
				alt={title}
			/>
			<p>{shortenText(title)}</p>
			<div className={styles.action}>
				{quantity === 1 && (
					<button
						onClick={() => {
							dispatch(removeItem(data));
						}}>
						<MdDeleteOutline />
					</button>
				)}
				{quantity > 1 && (
					<button
						onClick={() => {
							dispatch(decrease(data));
						}}>
						-
					</button>
				)}
				<span>{quantity}</span>
				<button
					onClick={() => {
						dispatch(increase(data));
					}}>
					+
				</button>
			</div>
		</div>
	);
}

export default BasketCard;
