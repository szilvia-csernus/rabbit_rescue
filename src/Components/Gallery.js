import imgNr1webp from '../assets/images/gallery/andriyko-podilnyk-unsplash.webp';
import imgNr1png from '../assets/images/gallery/andriyko-podilnyk-unsplash.png';
import imgNr2webp from '../assets/images/gallery/chan-swan-unsplash.webp';
import imgNr2png from '../assets/images/gallery/chan-swan-unsplash.png';
import imgNr3webp from '../assets/images/gallery/daniel-mccarthy-themccarthy-unsplash.webp';
import imgNr3png from '../assets/images/gallery/daniel-mccarthy-themccarthy-unsplash.png';
import imgNr4webp from '../assets/images/gallery/gabriel-miklos-unsplash.webp';
import imgNr4png from '../assets/images/gallery/gabriel-miklos-unsplash.png';
import imgNr5webp from '../assets/images/gallery/mariya-pexels.webp';
import imgNr5png from '../assets/images/gallery/mariya-pexels.png';
import imgNr6webp from '../assets/images/gallery/janan-lagerwall-unsplash.webp';
import imgNr6png from '../assets/images/gallery/janan-lagerwall-unsplash.png';
import imgNr7webp from '../assets/images/gallery/li-yan-unsplash.webp';
import imgNr7png from '../assets/images/gallery/li-yan-unsplash.png';
import imgNr8webp from '../assets/images/gallery/matt-pike-unsplash.webp';
import imgNr8png from '../assets/images/gallery/matt-pike-unsplash.png';
import imgNr9webp from '../assets/images/gallery/misha-walker-unsplash.webp';
import imgNr9png from '../assets/images/gallery/misha-walker-unsplash.png';
import imgNr10webp from '../assets/images/gallery/pablo-martinez-unsplash.webp';
import imgNr10png from '../assets/images/gallery/pablo-martinez-unsplash.png';
import imgNr11webp from '../assets/images/gallery/sandy-millar-unsplash.webp';
import imgNr11png from '../assets/images/gallery/sandy-millar-unsplash.png';
import imgNr12webp from '../assets/images/gallery/seyma-dalar-pexels.webp';
import imgNr12png from '../assets/images/gallery/seyma-dalar-pexels.png';
import imgNr13webp from '../assets/images/gallery/pure-julia-unsplash.webp';
import imgNr13png from '../assets/images/gallery/pure-julia-unsplash.png';
import imgNr14webp from '../assets/images/gallery/jackob-amson-unsplash.webp';
import imgNr14png from '../assets/images/gallery/jackob-amson-unsplash.png';
import imgNr15webp from '../assets/images/gallery/tima-miroshnichenko-pexels.webp';
import imgNr15png from '../assets/images/gallery/tima-miroshnichenko-pexels.png';
import imgNr16webp from '../assets/images/gallery/satyabratasm-unsplash.webp';
import imgNr16png from '../assets/images/gallery/satyabratasm-unsplash.png';

import classes from './Gallery.module.css';

const Picture = (props) => {
	
    const sources = props.sources.map((source, idx) => {
			return <source key={idx} type={source.type} srcSet={source.srcSet} />;
		});

	return (
		<div className={classes.pictureBox}>
			<picture dataname={props.dataName}>
				{sources}
				{
					<img
						src={props.img.src}
						width={props.img.width}
						height={props.img.height}
						alt={props.img.alt}
						loading="lazy"
					/>
				}
			</picture>
		</div>
	);
};

const Gallery = () => {
    const webp = 'image/webp';
	const png = 'image/png';
    const width = "350";

    return (
			<div className={classes.gallery}>
				<Picture
					key={1}
					sources={[
						{ type: webp, srcSet: imgNr1webp },
						{ type: png, srcSet: imgNr1png },
					]}
					img={{
						src: imgNr1webp,
						width: width,
						height: '363',
						alt: 'cute bunnies nr1',
					}}
					dataName="Miffy & Olive"
				/>
				<Picture
					key={2}
					sources={[
						{ type: webp, srcSet: imgNr2webp },
						{ type: png, srcSet: imgNr2png },
					]}
					img={{
						src: imgNr2webp,
						width: width,
						height: '392',
						alt: 'cute bunny nr2',
					}}
					dataName="Thumper"
				/>
				<Picture
					key={3}
					sources={[
						{ type: webp, srcSet: imgNr3webp },
						{ type: png, srcSet: imgNr3png },
					]}
					img={{
						src: imgNr3webp,
						width: width,
						height: '403',
						alt: 'cute bunny nr3',
					}}
					dataName="Cinnabun"
				/>
				<Picture
					key={4}
					sources={[
						{ type: webp, srcSet: imgNr4webp },
						{ type: png, srcSet: imgNr4png },
					]}
					img={{
						src: imgNr4webp,
						width: width,
						height: '404',
						alt: 'cute bunny nr4',
					}}
					dataName="Daisy"
				/>
				<Picture
					key={5}
					sources={[
						{ type: webp, srcSet: imgNr5webp },
						{ type: png, srcSet: imgNr5png },
					]}
					img={{
						src: imgNr5webp,
						width: width,
						height: '242',
						alt: 'cute bunnies nr5',
					}}
					dataName="Brno & Tom"
				/>
				<Picture
					key={6}
					sources={[
						{ type: webp, srcSet: imgNr6webp },
						{ type: png, srcSet: imgNr6png },
					]}
					img={{
						src: imgNr6webp,
						width: width,
						height: '394',
						alt: 'cute bunny nr6',
					}}
					dataName="Holly"
				/>
				<Picture
					key={7}
					sources={[
						{ type: webp, srcSet: imgNr7webp },
						{ type: png, srcSet: imgNr7png },
					]}
					img={{
						src: imgNr7webp,
						width: width,
						height: '354',
						alt: 'cute bunny nr7',
					}}
					dataName="Oreo"
				/>
				<Picture
					key={8}
					sources={[
						{ type: webp, srcSet: imgNr8webp },
						{ type: png, srcSet: imgNr8png },
					]}
					img={{
						src: imgNr8webp,
						width: width,
						height: '392',
						alt: 'cute bunny nr8',
					}}
					dataName="Lola"
				/>
				<Picture
					key={9}
					sources={[
						{ type: webp, srcSet: imgNr9webp },
						{ type: png, srcSet: imgNr9png },
					]}
					img={{
						src: imgNr9webp,
						width: width,
						height: '354',
						alt: 'cute bunny nr9',
					}}
					dataName="Chester"
				/>
				<Picture
					key={10}
					sources={[
						{ type: webp, srcSet: imgNr10webp },
						{ type: png, srcSet: imgNr10png },
					]}
					img={{
						src: imgNr10webp,
						width: width,
						height: '427',
						alt: 'cute bunny nr10',
					}}
					dataName="Snowball"
				/>
				<Picture
					key={11}
					sources={[
						{ type: webp, srcSet: imgNr11webp },
						{ type: png, srcSet: imgNr11png },
					]}
					img={{
						src: imgNr11webp,
						width: width,
						height: '394',
						alt: 'cute bunny nr11',
					}}
					dataName="Hopper"
				/>
				<Picture
					key={12}
					sources={[
						{ type: webp, srcSet: imgNr12webp },
						{ type: png, srcSet: imgNr12png },
					]}
					img={{
						src: imgNr12webp,
						width: width,
						height: '473',
						alt: 'cute bunnies nr12',
					}}
					dataName="Jack & Jill"
				/>
				<Picture
					key={13}
					sources={[
						{ type: webp, srcSet: imgNr13webp },
						{ type: png, srcSet: imgNr13png },
					]}
					img={{
						src: imgNr13webp,
						width: width,
						height: '473',
						alt: 'cute bunnies nr13',
					}}
					dataName="Fish & Chips"
				/>
				<Picture
					key={14}
					sources={[
						{ type: webp, srcSet: imgNr14webp },
						{ type: png, srcSet: imgNr14png },
					]}
					img={{
						src: imgNr14webp,
						width: width,
						height: '354',
						alt: 'cute bunny nr14',
					}}
					dataName="Oliver"
				/>
				<Picture
					key={15}
					sources={[
						{ type: webp, srcSet: imgNr15webp },
						{ type: png, srcSet: imgNr15png },
					]}
					img={{
						src: imgNr15webp,
						width: width,
						height: '285',
						alt: 'cute bunnies nr15',
					}}
					dataName="Fluff & Bunbun"
				/>
				<Picture
					key={16}
					sources={[
						{ type: webp, srcSet: imgNr16webp },
						{ type: png, srcSet: imgNr16png },
					]}
					img={{
						src: imgNr16webp,
						width: width,
						height: '392',
						alt: 'cute bunny nr16',
					}}
					dataName="Teddy"
				/>
			</div>
		);
                   
};

export default Gallery;
