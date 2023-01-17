import { ButtonFeature2 } from './Buttons';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { burgerActions } from '../store/burger-slice';
import Modal from './Modal';
import { useEffect, useState } from 'react';

const NavBar = () => {
	const initialMenu = window.innerWidth > 700 ? true : false
	const [expandedMenu, setExpandedMenu] = useState(initialMenu);
	
	const burger = useSelector((state) => state.burger);
	const classProp = burger ? classes.sideBarOpen : classes.sideBarClosed;

	
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(burgerActions.initialize(burger));
	};

	// This hook makes sure that the side menu changes to expanded menu after
	// window resize and vica versa. Without 'handleresize', react would not
	// re-render the page whenever the user resized the window, meaning the side
	// menu (designed for mobile use) would stay open even after the window 
	// expands. (i.e. turning the tablet from portrait to landscape.)
	useEffect(() => {
		function handleResize() {
			
			if (expandedMenu && window.innerWidth < 700) {
				setExpandedMenu(false)
			}
			if (expandedMenu === false && window.innerWidth >= 700) {
				setExpandedMenu(true)
				// close the sidebar in case it was open.
				clickHandler();
			}
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	let nav = (
		<>
			<li className={classes.navItem}>
				<NavLink
					to="/"
					end
					className={({ isActive }) => (isActive ? classes.active : null)}
					onClick={clickHandler}
				>
					About
				</NavLink>
			</li>
			<li className={classes.navItem}>
				<NavLink
					to="/adopt"
					className={({ isActive }) => (isActive ? classes.active : null)}
					onClick={clickHandler}
				>
					Adopt
				</NavLink>
			</li>
			<li className={classes.navItem}>
				<NavLink
					to="/contact-us"
					className={({ isActive }) => (isActive ? classes.active : null)}
					onClick={clickHandler}
				>
					Contact Us
				</NavLink>
			</li>
			<li className={classes.navItem}>
				<ButtonFeature2 onClick={clickHandler}>Donate</ButtonFeature2>
			</li>
		</>
	);

	return (
		<nav>
			{expandedMenu && <ul className={classes.expandedMenuBar}>{nav}</ul>}
			{burger && (
				<Modal pos={'side'}>
					<ul className={classProp}>{nav}</ul>
				</Modal>
			)}
			{!burger && <ul className={classProp}>{nav}</ul>}
		</nav>
	);
};

export default NavBar;
