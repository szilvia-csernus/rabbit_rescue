import { ReactComponent as LocationIcon } from '../assets/icons/location.svg'; 
import { ReactComponent as LetterIcon } from '../assets/icons/letter.svg'; 
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg'; 
import { ReactComponent as VolunteerIcon } from '../assets/icons/volunteer.svg';
import { ReactComponent as RabbitLeftIcon } from '../assets/icons/rabbit-left.svg';
import { Article } from '../Components/Article';
import { ButtonGeneral } from '../Components/Buttons';

import classes from './ContactUs.module.css';


const ContactUs = () => {
	
	return (
		<main>
			<section>
				<div className={classes.titleBox}>
					<h1 className={classes.title}>Contact Us</h1>
				</div>
			</section>
			<Article className={classes.location}>
				<h2 className={classes.articleTitle}>How to find us?</h2>
				<div className={classes.contactItem}>
					<LocationIcon
						className={classes.locationIcon}
						aria-label="location icon"
					/>
					<div>
						Hopper Farm
						<br />
						Old Windsor, Berkshire
						<br />
						SL4 YYY
						<br />
						United Kingdom
					</div>
				</div>
				<div className={classes.googleMap}>
					<iframe
						width="600"
						height="450"
						title="google map pointing to address"
						src="https://maps.google.com/maps?q=51.470157,%20-0.566786&t=&z=13&ie=UTF8&iwloc=&output=embed"
						loading="lazy"
					></iframe>
				</div>
				<p>
					<br />
					<span>
						We are open to prospective bunny parents on Saturdays from 10 am to
						5 pm.
					</span>
					<br />
					<br />
					Our volunteers will be here to tell you everything you need to know
					about adoption.
				</p>
			</Article>
			<Article className={classes.volunteer}>
				<h2 className={classes.articleTitle}>Interested in volunteering?</h2>
				<div className={classes.volunteerIconBox}>
					<VolunteerIcon
						className={classes.volunteerIcon}
						aria-label="helping hands icon"
					/>
				</div>
				<p>
					We are always in need of a helping hand (or two).
					<br />
					<br />
					Please get in touch.
				</p>
				<div className={classes.buttonBox}>
					<ButtonGeneral>Volunteer</ButtonGeneral>
				</div>
			</Article>
			<Article className={classes.questions}>
				<h2 className={classes.articleTitle}>Got questions?</h2>
				<div className={classes.phone}>
					<a
						href="tel:+441234567890"
						className={classes.footerItem}
						aria-label="phone icon"
					>
						<p>
							<PhoneIcon
								className={classes.phoneIcon}
								aria-label="location icon"
							/>
							+44 123 4567 890
						</p>
					</a>
				</div>
				<div className={classes.email}>
					<a
						href="mailto:getintouch@hopper.org.uk"
						className={classes.footerItem}
						aria-label="letter icon"
					>
						<p>
							<LetterIcon className={classes.letterIcon} />
							getintouch@hopperfarm.org.uk
						</p>
					</a>
				</div>
				<div>
					<RabbitLeftIcon
						className={classes.rabbitLeftIcon}
						aria-label="rabbit icon"
					/>
				</div>
			</Article>
		</main>
	);
};

export default ContactUs;
