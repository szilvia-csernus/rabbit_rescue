import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg'; 
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg'; 
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg'; 
import { ReactComponent as LocationIcon } from '../assets/icons/location.svg'; 
import { ReactComponent as LetterIcon } from '../assets/icons/letter.svg'; 
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg'; 

import classes from './Footer.module.css';

const Footer = () => {
	return (
		<>
			<footer className={classes.footer}>
				<div className={classes.footerMain}>
					<div className={classes.footerAlignBox}>
						<div className={`${classes.footerAddress} ${classes.footerItem}`}>
							<LocationIcon
								className={classes.locationIcon}
								aria-label="location icon"
							/>
							<address>
								<p>Hopper Farm</p>
								<p>Old Windsor, Berkshire</p>
								<p>SL4 YYY United Kingdom</p>
							</address>
						</div>
						<div className={classes.footerContacts}>
							<a
								href="tel:+441234567890"
								className={classes.footerItem}
								aria-label="phone icon"
							>
								<PhoneIcon className={classes.phoneIcon} />
								<p>+44 123 4567 890</p>
							</a>
							<a
								href="mailto:getintouch@hopper.org.uk"
								className={classes.footerItem}
								aria-label="letter icon"
							>
								<LetterIcon className={classes.letterIcon} />

								<p>getintouch@hopperfarm.org.uk</p>
							</a>
						</div>
						<div className={classes.footerItemSocial}>
							<p className={classes.followUs}>Follow Us:</p>
							<div className={classes.footerSocialBox}>
								<a
									href="https://facebook.com"
									target="blank"
									rel="noreferrer"
									aria-label="facebook link opening in new tab"
								>
									<FacebookIcon className={classes.footerSocialIcon} />
								</a>
								<a
									href="https://instagram.com"
									target="_blank"
									rel="noreferrer"
									aria-label="instagram link opening in new tab"
								>
									<InstagramIcon className={classes.footerSocialIcon} />
								</a>
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noreferrer"
									aria-label="twitter link opening in new tab"
								>
									<TwitterIcon className={classes.footerSocialIcon} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className={classes.footerSmallPrint}>
					<p>This website was created for educational purposes.</p>
					<p>
						Hopper Farm Rabbit Rescue is a fictional organization. No user input
						is stored on our servers.
					</p>

					<p>
						<span>&copy;</span> 2023. All Rights Reserved.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
