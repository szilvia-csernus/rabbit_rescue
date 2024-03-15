import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store/burger-slice';
import { thanksDonationActions } from '../store/thanks-donation-slice';
import { thanksVolunteerActions } from '../store/thanks-volunteer-slice';
import { errorMessageActions } from '../store/error-message-slice';
import { volunteerFormActions } from '../store/volunteer-form-slice';

import classes from './Modal.module.css';

const Backdrop = () => {
	const burger = useSelector((state) => state.burger);
	const thanksDonation = useSelector((state) => state.thanksDonation);
	const volunteerForm = useSelector((state) => state.volunteerForm);
	const thanksVolunteer = useSelector((state) => state.ThanksVolunteer);
	const errorMessage = useSelector((state) => state.errorMessage);

	const dispatch = useDispatch();
	
	const clickHandler = () => {
		burger && dispatch(burgerActions.initialize(burger))
		thanksDonation && dispatch(thanksDonationActions.reset());
		volunteerForm && dispatch(volunteerFormActions.reset());
		thanksVolunteer && dispatch(thanksVolunteerActions.reset());
		errorMessage && dispatch(errorMessageActions.reset());
	}

	return <div className={classes.backdrop} onClick={clickHandler}/>;
};

const Overlay = (props) => {
	return <div className={classes.overlay}>{props.children}</div>;
};

const Canvas = (props) => {
	const position = props.pos === 'side' ? classes.side : classes.center;
	return <div className={position}>{props.children}</div>;
}


const Modal = (props) => {
	const portalElement = document.getElementById('overlay');
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<Overlay >
					<Canvas pos={props.pos}>{props.children}</Canvas>
				</Overlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
