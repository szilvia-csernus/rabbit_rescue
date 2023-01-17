import classes from './Burger.module.css';
import { ReactComponent as BurgerIcon } from '../assets/icons/burger.svg';
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
			<BurgerIcon className={classes.burgerIcon} />
		</Button>
	);
};
