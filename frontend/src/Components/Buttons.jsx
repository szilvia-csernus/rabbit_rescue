import classes from './Buttons.module.css';

export const Button = (props) => {
	const classNames = `${classes.button} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonGeneral = (props) => {
	const classNames = `${classes.button} ${classes.general} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonSecondary = (props) => {
	const classNames = `${classes.button} ${classes.secondary} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonFeature = (props) => {
	const classNames = `${classes.button} ${classes.feature1} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export const ButtonDonate = (props) => {
	const classNames = `${classes.button}  ${classes.feature2} ${props.className}`;
	return (
		<button className={classNames} onClick={props.onClick}>
			{props.children}
		</button>
	);
};