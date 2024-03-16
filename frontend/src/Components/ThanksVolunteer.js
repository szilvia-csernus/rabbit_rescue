import classes from './Form.module.css';

import { ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { thanksVolunteerActions } from '../store/thanks-volunteer-slice';


const ThanksVolunteer = () => {
	
	const dispatch = useDispatch();

	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(thanksVolunteerActions.reset());
	};

	return (
		<Modal pos={'centre'}>
			<section className={classes.content}>
				<h2 className={classes.header}>Thanks for expressing your interest!</h2>
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

export default ThanksVolunteer;
