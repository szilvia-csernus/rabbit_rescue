import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';

import classes from './Modal.module.css';

const Backdrop = (props) => {

	const dispatch = useDispatch();
	
	const clickHandler = () => {
		props.elementState && props.resetAction && dispatch(props.resetAction());
	}

	return <div className={classes.backdrop} onClick={clickHandler}/>;
};

const Overlay = (props) => {
	return <div className={classes.overlay}>{props.children}</div>;
};

const ContentArea = (props) => {
	const position = props.pos === 'side' ? classes.side : classes.center;
	return <div className={position}>{props.children}</div>;
}


const Modal = (props) => {
	const portalElement = document.getElementById('overlay');
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop 
					elementState={props.elementState}
					resetAction={props.resetAction}
				/>, portalElement)}
			{ReactDOM.createPortal(
				<Overlay >
					<ContentArea pos={props.pos}>{props.children}</ContentArea>
				</Overlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
