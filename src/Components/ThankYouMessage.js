import classes from './Form.module.css';

import { ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { thankYouMessageActions } from '../store/thank-you-message-slice';


const ThankYouMessage = () => {
	
	const dispatch = useDispatch();

	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(thankYouMessageActions.reset());
	};

	return (
		<Modal pos={'centre'}>
			<section className={classes.content}>
				<h2 className={classes.header}>THANK YOU!</h2>
				<div className={classes.body}>
					<p>
						We will be in touch soon.
					</p>
				

						<div className={classes.footer}>
							<ButtonSecondary onClick={cancelClickHandler}>
								Close
							</ButtonSecondary>
						</div>
				</div>
			</section>
		</Modal>
	);
};

export default ThankYouMessage;
