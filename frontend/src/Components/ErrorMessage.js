import classes from './Form.module.css';

import { ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { errorMessageActions } from '../store/error-message-slice';

const ErrorMessage = () => {
	const dispatch = useDispatch();

	const errorMessageState = useSelector((state) => state.errorMessage);

	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(errorMessageActions.reset());
	};

	return (
		<Modal
			pos={'centre'}
			elementState={errorMessageState}
			resetAction={errorMessageActions.reset}
		>
			<section className={classes.content}>
				<h2 className={classes.header}>An Unknown Error Occured.</h2>
				<div className={classes.body}>
					<p>Apologies for the inconvenience!</p>
					<p>Please try again later.</p>

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

export default ErrorMessage;
