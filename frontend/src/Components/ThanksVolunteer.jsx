import classes from './Form.module.css';

import { ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { thanksVolunteerActions } from '../store/thanks-volunteer-slice';


const ThanksVolunteer = (props) => {
	
	const dispatch = useDispatch();

	const thanksVolunteerState = useSelector((state) => state.thanksVolunteer);

	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(thanksVolunteerActions.reset());
	};

	return (
		<Modal pos={'centre'}
				elementState={thanksVolunteerState}
				resetAction={thanksVolunteerActions.reset}>
			<section className={classes.content} data-testid="thanks-volunteer">
				<h2 className={classes.header}>Thank you for your enquiry!</h2>
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
