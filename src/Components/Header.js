import classes from './Header.module.css';

import { Logo } from './Logo';
import NavBar from './NavBar';
import { Burger } from './Burger';

const Header = (props) => {
    

	return (
		<header className={classes.header}>
			<Logo />
			<NavBar
				id="navbar"
			/>
			<Burger />
		</header>
	);
};

export default Header;
