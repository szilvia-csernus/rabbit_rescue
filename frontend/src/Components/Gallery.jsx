import { useDispatch, useSelector } from 'react-redux';

import classes from './Gallery.module.css';
import { useState } from 'react';
import Modal from './Modal';
import { ButtonGeneral, ButtonSecondary } from './Buttons';
import { enquiryFormActions } from '../store/enquiry-form-slice';

const Picture = (props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const dispatch = useDispatch();

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const clickEnquireHandler = () => {
		setIsExpanded(!isExpanded);
		dispatch(enquiryFormActions.setActiveRabbitGroup({name: props.dataName, image: props.src}));
		dispatch(enquiryFormActions.openForm())
	}

	return (
		<>
			<div className={classes.card} dataname={props.dataName}>
				<img
					src={props.src}
					width={props.width}
					alt={props.dataName}
					loading="lazy"
					onClick={toggleExpand}
				/>
			</div>
			{isExpanded && (
				<Modal
					pos={'centre'}
					elementState={isExpanded}
				>
					<article className={classes.detailedCard}>
						<img
							className={classes.rabbitImg}
							src={props.src}
							alt={props.dataName}
						/>
						<div>
							<div>
								{props.rabbits.map((rabbit) => (
									<div key={rabbit.name} className={classes.rabbitDetails}>
										<h3>{rabbit.name}</h3>
										<p>{rabbit.breed}</p>
										<p>{rabbit.age}</p>
										<p>{rabbit.sex}</p>
										<p>
											{rabbit.vaccinated && (
												<>
													<span className="material-symbols-outlined">
														done
													</span>
													Vaccinated
												</>
											)}
										</p>
										<p>
											{!rabbit.vaccinated && (
												<>
													<span className="material-symbols-outlined">
														close
													</span>
													Not Vaccinated
												</>
											)}
										</p>
										<p>
											{rabbit.neutered && (
												<>
													<span className="material-symbols-outlined">
														check
													</span>
													Neutered
												</>
											)}
										</p>
										<p>
											{!rabbit.neutered && (
												<>
													<span className="material-symbols-outlined">
														close
													</span>
													Not Neutered
												</>
											)}
										</p>
									</div>
								))}
							</div>
							<ButtonGeneral onClick={clickEnquireHandler}>Enquire</ButtonGeneral>
							<ButtonSecondary onClick={toggleExpand}>Close</ButtonSecondary>
						</div>
					</article>
				</Modal>
			)}
		</>
	);
};

const Gallery = () => {
	const rabbit_groups = useSelector((state) => state.rabbits);
    const width = "350";

    return (
			<div className={classes.gallery}>
				{ rabbit_groups.map((group) => (
					<Picture
					key={group.id}
					src={group.images[0].image}
					width={width}
					rabbits={group.rabbits}
					dataName={group.group_name}
					/>)
				)}
			</div>
		);
                   
};

export default Gallery;
