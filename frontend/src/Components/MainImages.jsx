import heroImageLgPng from '../assets/images/main-images/hero-picture-lg.png';
import heroImageLgWebp from '../assets/images/main-images/hero-picture-lg.webp';
import heroImageMdPng from '../assets/images/main-images/hero-picture-md.png';
import heroImageMdWebp from '../assets/images/main-images/hero-picture-md.webp';
import heroImageSmPng from '../assets/images/main-images/hero-picture-sm.png';
import heroImageSmWebp from '../assets/images/main-images/hero-picture-sm.webp';
import heroImageSmHigherResWebp from '../assets/images/main-images/hero-picture-sm-higher-res.webp';

import adoptingImageLgPng from '../assets/images/main-images/adopting-picture-lg.png';
import adoptingImageLgWebp from '../assets/images/main-images/adopting-picture-lg.webp';
import adoptingImageMdPng from '../assets/images/main-images/adopting-picture-md.png';
import adoptingImageMdWebp from '../assets/images/main-images/adopting-picture-md.webp';
import adoptingImageSmPng from '../assets/images/main-images/adopting-picture-sm.png';
import adoptingImageSmWebp from '../assets/images/main-images/adopting-picture-sm.webp';
import adoptingImageSmHigherResWebp from '../assets/images/main-images/adopting-picture-sm-higher-res.webp';

import classes from './MainImages.module.css';
import { ButtonFeature } from './Buttons';
import { Link } from 'react-router-dom';

export const HeroImage = () => {
	const webp = 'image/webp';
	const png = 'image/png';
	return (
		<section className={classes.heroImgBox}>
			<picture>
				<source
					type={webp}
					media="(max-width: 414px)"
					srcSet={`${heroImageSmWebp} 414w, ${heroImageSmHigherResWebp} 720w`}
					sizes="(max-width: 414px) 414px, 720px"
					width="414"
					height="497"
				/>
				<source
					type={webp}
					media="(max-width: 991px)"
					srcSet={heroImageMdWebp}
					sizes="992px"
					width="992"
					height="405"
				/>
				<source
					type={webp}
					media="(min-width: 992px)"
					srcSet={heroImageLgWebp}
					width="1400"
					height="571"
				/>
				<source
					type={png}
					srcSet={`${heroImageSmPng} 500w,
                    			${heroImageMdPng} 992w, 
                    			${heroImageLgPng} 1400w"`}
					sizes="(max-width: 414px) 500px, (max-width: 992px) 992px, 1400px"
				/>
				<img
					className={classes.heroImg}
					src={heroImageLgPng}
					width="1400"
					height="571"
					alt="cute bunny"
					decoding="async"
					fetchpriority="high"
				/>
			</picture>
			<div className={classes.heroCalloutBox}>
				<div className={classes.heroTextbox}>
					<h3>Could you offer one of our rabbits a loving home?</h3>
					<ButtonFeature>
						<Link to="/adopt" className={classes.adoptBtn}>
							Adopt
						</Link>
					</ButtonFeature>
				</div>
			</div>
		</section>
	);
};

export const AdoptImage = () => {
	const webp = 'image/webp';
	const png = 'image/png';
	return (
		<picture className={classes.adoptImgBox}>
			<source
				type={webp}
				media="(max-width: 414px)"
				srcSet={`${adoptingImageSmWebp} 414w, ${adoptingImageSmHigherResWebp} 720w`}
				sizes="(max-width: 414px) 414px, 720px"
				width="414"
				height="183"
			/>
			<source
				type={webp}
				media="(max-width: 991px)"
				srcSet={adoptingImageMdWebp}
				sizes="992px"
				width="992"
				height="271"
			/>
			<source
				type={webp}
				media="(min-width: 992px)"
				srcSet={adoptingImageLgWebp}
				sizes="1400px"
				width="1400"
				height="393"
			/>
			<source
				type={png}
				srcSet={`${adoptingImageSmPng} 414w,
                    			${adoptingImageMdPng} 992w, 
                    			${adoptingImageLgPng} 1400w"`}
				sizes="(max-width: 414px) 414px, (max-width: 992px) 992px, 1400px"
			/>
			<img
				className={classes.adoptImg}
				src={adoptingImageLgPng}
				width="1400"
				height="393"
				alt="two cute bunnies"
				decoding="async"
				fetchpriority="high"
			/>
		</picture>
	);
};
