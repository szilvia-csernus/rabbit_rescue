import { ReactComponent as RabbitRightIcon } from '../assets/icons/rabbit-right.svg';
import { ReactComponent as RabbitLeftIcon } from '../assets/icons/rabbit-left.svg';
import { ReactComponent as VisitUsIcon } from '../assets/icons/visit-us.svg';
import { ReactComponent as GiftIcon } from '../assets/icons/gift.svg';
import { ReactComponent as VolunteerIcon } from '../assets/icons/volunteer.svg';
import { ButtonGeneral } from '../Components/Buttons';

import { Link } from 'react-router-dom';

import classes from './About.module.css';
import { HeroImage } from '../Components/MainImages';
import { ArticleLeft, Article, ArticleRight } from '../Components/Article';

const About = () => {
	return (
		<main>
			<HeroImage />

			<Article className={classes.mission}>
				<h1>Who we are and what we do?</h1>
				<div className={classes.missionTextBox}>
					<p className={classes.missionText}>
						We are a small non-profit organisation located in East Berkshire,
						UK. <br/> ur mission is to find a loving home for every neglected or
						abandoned rabbit that arrives in our centre.
					</p>
				</div>
			</Article>
			<ArticleLeft>
				<div>
					<RabbitLeftIcon
						className={classes.rabbitLeftIcon}
						aria-label="rabbit icon"
					/>
					<RabbitRightIcon
						className={classes.rabbitRightIcon}
						aria-label="rabbit icon"
					/>
				</div>
				<div>
					<p>
						Whether it&apos;s <span>rescuing rabbits</span> from mistreatment or 
						<span> taking in abandoned ones</span>, we always give them the 
						specialist attention they need. We look after them until we find the 
						right owners to adopt them into loving, happy homes.
					</p>
					<h2>Interested in adopting?</h2>
				</div>
				<div className={classes.generalButtonBoxLeft}>
					<ButtonGeneral>
						<Link to="/adopt">Find Out More</Link>
					</ButtonGeneral>
				</div>
			</ArticleLeft>
			<ArticleRight>
				<div>
					<VisitUsIcon
						className={classes.visitUsIcon}
						aria-label="visit us icon"
					/>
				</div>
				<div>
					<p>
						<span>
							We are open to prospective bunny parents on Saturdays from 10am to 
							5pm.
						</span>
						Here, you have the chance to meet and play with our rabbit residents 
						and also learn about how to care for them. Our friendly volunteers 
						will tell you everything you need to know about adoption.
					</p>
					<h2>Would you like to meet our bunnies?</h2>
				</div>
				<div className={classes.generalButtonBoxRight}>
					<ButtonGeneral>
						<Link to="/contact-us">Contact Us</Link>
					</ButtonGeneral>
				</div>
			</ArticleRight>
			<ArticleLeft>
				<div>
					<GiftIcon className={classes.giftIcon} aria-label="gift-icon" />
				</div>
				<div>
					<p>
						All the work we do would not be possible without our 
						<span>wonderful volunteers</span> and the 
						<span>generous support</span> we get through public donations. All 
						donations we receive help fund the welfare of our furry friends, 
						from vet bills and treatments to food, hay and bedding. 
					</p>
					<h2>Please consider supporting us.</h2>
				</div>
				<div className={classes.generalButtonBoxLeft}>
					<ButtonGeneral>Donate</ButtonGeneral>
				</div>
			</ArticleLeft>
			<ArticleRight>
				<div>
					<VolunteerIcon className={classes.volunteerIcon} aria-label="helping hands icon" />
				</div>
				<div>
					<p>
						<span>Interested in volunteering with us? </span>
						We are always in need of a helping hand (or two).
					</p>
					<h2>Please get in touch.</h2>
				</div>
				<div className={classes.generalButtonBoxRight}>
					<ButtonGeneral>Volunteer</ButtonGeneral>
				</div>
			</ArticleRight>
		</main>
	);
};

export default About;
