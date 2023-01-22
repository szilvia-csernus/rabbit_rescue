import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store/burger-slice';
import { donateFormActions } from '../store/donate-form-slice';
import { thankYouMessageActions } from '../store/thank-you-message-slice';
import { volunteerFormActions } from '../store/volunteer-form-slice';

import classes from './Modal.module.css';

const Backdrop = () => {
	const burger = useSelector((state) => state.burger);
	const donateForm = useSelector((state) => state.donateForm);
	const volunteerForm = useSelector((state) => state.volunteerForm);
	const thankYouMessage = useSelector((state) => state.thankYouMessage);

	const dispatch = useDispatch();
	
	const clickHandler = () => {
		burger && dispatch(burgerActions.initialize(burger))
		donateForm && dispatch(donateFormActions.reset());
		volunteerForm && dispatch(volunteerFormActions.reset());
		thankYouMessage && dispatch(thankYouMessageActions.reset());
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
