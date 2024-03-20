import classes from './Burger.module.css';
import BurgerIcon from '../assets/icons/burger.svg?react';
import { Button } from './Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store/burger-slice';

export const Burger = (props) => {
    const burger = useSelector((state) => state.burger);	
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(burgerActions.toggler(burger))
	}

	return (
		<Button
			className={classes.burger}
			onClick={clickHandler}
		>
			<BurgerIcon className={classes.burgerIcon} aria-label="burger menu icon"/>
		</Button>
	);
};
