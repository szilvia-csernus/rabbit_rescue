import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
	return <div className={classes.backdrop} />;
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
				<Overlay>
					<Canvas pos={props.pos}>{props.children}</Canvas>
				</Overlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
