import classes from './Adopt.module.css';

import { Article } from '../Components/Article';
import { ButtonGeneral } from '../Components/Buttons';
import { AdoptImage } from '../Components/MainImages';
import { ReactComponent as VisitUsIcon } from '../assets/icons/visit-us.svg';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const Gallery = lazy(() => import('../Components/Gallery'));

const Adopt = () => {
	window.scroll(0, 0);
	
	return (
		<main>
			<AdoptImage />
			<Article className={classes.adopt}>
				<h1>Adopting Rabbits</h1>
				<div>
					<p>
						Whenever a rabbit arrives in our centre we have them
						<span> checked over</span> by a vet. We first treat any health
						issues, then have them <span>neutered</span> if needed.
						<br />
						<br />
						As rabbits are <span>social</span> animals and the best company for
						them is each other, we aim to
						<span> re-home them in pairs or small groups. </span>We do this by
						either bonding solo rabbits with one of our current bunnies or if
						you already have one at home we will try to bond them with each
						other before adoption takes place.
						<br />
						<br />
						Having two or more bonded rabbits instead of just a single one
						ensures their <span>happiness</span> and caring for them becomes
						easier too.
						<br />
						<br />
						We also would like to be certain that owning a rabbit is the{' '}
						<span>right choice</span> for you and your family. We would like to
						know about your expectations, other animals at home, etc. In
						addition, we will also ask if you have <span>enough space</span> for
						them at home: a safe enclosure with a minimum size of 3mx2m, but the
						larger the better! Wild rabbits cover a space as large as about 8
						tennis courts daily.
						<br />
						<br />
						<span>
							We are open to prospective bunny parents on Saturdays from 10am to
							5pm.{' '}
						</span>
						Once here, you have the chance to meet and play with our rabbit
						residents and also learn about how to care for them. <br />
						<br />
						Our volunteers will tell you everything you need to know about
						adoption.
					</p>
					<br />
					<ButtonGeneral>
						<Link to="/contact-us">Visit Us</Link>
					</ButtonGeneral>
				</div>
			</Article>

			<Article className={classes.gallery}>
				<h2 className={classes.galleryTitle}>Some of our latest arrivals</h2>

				<Suspense fallback="Loading...">
					<Gallery />
				</Suspense>

				<ButtonGeneral>
					<Link to="/contact-us">Visit Us</Link>
				</ButtonGeneral>

				<div>
					<VisitUsIcon className={classes.icon} />
				</div>
			</Article>
		</main>
	);
};

export default Adopt;
