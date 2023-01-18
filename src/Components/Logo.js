import classes from './Logo.module.css';
import { ReactComponent as RabbitLogo } from '../assets/icons/rabbit-logo.svg'
import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link
			to='/'
			aria-label="Hopper rabbit rescue logo"
		>
			<div className={classes.logoGrid}>
                <RabbitLogo className={classes.logoRabbit}/>
				<div className={classes.logoHopper}>hopper farm</div>
				<div className={classes.logoRabbitRescue}>rabbit rescue</div>
			</div>
		</Link>
	);
};
