import classes from './Logo.module.css';
import { ReactComponent as RabbitLogo } from '../assets/icons/rabbit-logo.svg'

export const Logo = () => {
	return (
		<a
			id="my-logo-link"
			href="./index.html"
			aria-label="Hopper rabbit rescue logo"
		>
			<div className={classes.logoGrid}>
                <RabbitLogo className={classes.logoRabbit}/>
				<div className={classes.logoHopper}>hopper farm</div>
				<div className={classes.logoRabbitRescue}>rabbit rescue</div>
			</div>
		</a>
	);
};
