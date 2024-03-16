import classes from './Form.module.css';

import { ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { thanksDonationActions } from '../store/thanks-donation-slice';
import { useNavigate } from 'react-router-dom';

const ThanksDonation = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const closeClickHandler = (event) => {
		event.preventDefault();
		dispatch(thanksDonationActions.reset());
		navigate('/');
	};

	return (
		<Modal pos={'centre'}>
			<section className={classes.content}>
				<h2 className={classes.header}>SUCCESSFUL PAYMENT</h2>
				<div className={classes.body}>
					<p>Thank you for your generosity!</p>
					<div className={classes.footer}>
						<ButtonSecondary onClick={closeClickHandler}>
							Close
						</ButtonSecondary>
					</div>
				</div>
			</section>
		</Modal>
	);
};

export default ThanksDonation;
