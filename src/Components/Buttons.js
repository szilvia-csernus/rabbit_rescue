import classes from './Buttons.module.css';

export const ButtonGeneral = (props) => {
	const classNames = `${classes.buttonGeneral} ${props.className}`;
	return <button className={classNames}>{props.children}</button>;
};

export const ButtonSecondary = (props) => {
	const classNames = `${classes.buttonSecondary} ${props.className}`;
	return <button className={classNames}>{props.children}</button>;
};

export const ButtonFeature1 = (props) => {
	const classNames = `${classes.buttonFeature1} ${props.className}`;
	return <button className={classNames}>{props.children}</button>;
};

export const ButtonFeature2 = (props) => {
	const classNames = `${classes.buttonFeature2} ${props.className}`;
	return <button className={classNames}>{props.children}</button>;
};
