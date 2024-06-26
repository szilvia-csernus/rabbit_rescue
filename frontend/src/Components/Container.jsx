import classes from './Container.module.css';

export const Container = (props) => {
	const classNames = `${classes.container} ${props.className ? props.className : ""}`;
	return <div className={classNames} data-testid="container">{props.children}</div>;
};
