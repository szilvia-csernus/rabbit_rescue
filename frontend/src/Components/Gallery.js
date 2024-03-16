import { pictures } from '../assets/data/pictures-data';

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
				{ pictures.map((picture, idx) => {
					return (
					<Picture
					key={idx}
					sources={[
						{ type: webp, srcSet: picture.srcSetwebp },
						{ type: png, srcSet: picture.srcSetpng },
					]}
					img={{
						src: picture.srcSetwebp,
						width: width,
						height: picture.height,
						alt: `cute bunnies nr${idx}`
					}}
					dataName={picture.dataName}
					/>)
				}
				)}
			</div>
		);
                   
};

export default Gallery;
