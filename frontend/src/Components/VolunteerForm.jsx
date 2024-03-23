import classes from './Form.module.css';

import { useEffect, useState } from 'react';
import useInput from '../Hooks/use-input';
import { ButtonGeneral, ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import { volunteerFormActions } from '../store/volunteer-form-slice';
import { send } from '../store/form-action-creator';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) =>
	/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);


const VolunteerForm = () => {
	const [formValid, setFormValid] = useState(false);
	const [phoneNr, setPhoneNr] = useState('');
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const volunteerFormState = useSelector((state) => state.volunteerForm);

	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: nameReset,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		isValid: emailIsValid,
		hasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(isEmail);

	useEffect(() => {
		if (nameIsValid && emailIsValid) {
			setFormValid(true);
		}
		return () => setFormValid(false);
	}, [nameIsValid, emailIsValid]);

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			nameBlurHandler();
			emailBlurHandler();
			return;
		}

		nameReset();
		emailReset();
		setPhoneNr('');
		setMessage('');
		dispatch(volunteerFormActions.reset());
		send(dispatch, {name: nameValue,
			email: emailValue,
			phone: phoneNr,
			message}, 'Volunteer', 'volunteering')
		;
	};

	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(volunteerFormActions.reset());
	};

	const nameClassNames = `${classes.formInput} ${
		nameHasError && classes.formInputInvalid
	}`;
	const emailClassNames = `${classes.formInput} ${
		emailHasError && classes.formInputInvalid
	}`;

	return (
		<Modal pos={'centre'}
				elementState={volunteerFormState}
				resetAction={volunteerFormActions.reset}>
			<section className={classes.content}>
				<h2 className={classes.header}>VOLUNTEER</h2>
				<div className={classes.body}>
					<p>Please fill in the form so we can contact you.</p>

					<form className={classes.form} onSubmit={submitHandler}>
						<label htmlFor="name" className={classes.formLabel}>
							Name*
						</label>
						<input
							id="name"
							type="text"
							name="name"
							className={nameClassNames}
							onChange={nameChangeHandler}
							onBlur={nameBlurHandler}
							value={nameValue}
						/>
						<div
							className={
								nameHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide your name.
						</div>

						<label htmlFor="email" className={classes.formLabel}>
							Email address*
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className={emailClassNames}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={emailValue}
						/>
						<div
							className={
								emailHasError ? classes.feedbackInvalid : classes.feedbackValid
							}
						>
							Please provide your email address.
						</div>

						<label htmlFor="phone" className={classes.formLabel}>
							Phone number (optional)
						</label>
						<input
							id="phone"
							type="tel"
							name="phone"
							className={classes.formInput}
							value={phoneNr}
							onChange={(event) => setPhoneNr(event.target.value)}
						/>
						<br />
						<label htmlFor="message" className={classes.formLabel}>
							In 1-2 sentences, please tell us about how you would like to
							support our work. (optional)
						</label>
						<textarea
							id="message"
							className={classes.formInput}
							rows="3"
							placeholder="Your message"
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						></textarea>

						<div className={classes.footer}>
							<ButtonSecondary onClick={cancelClickHandler}>
								Cancel
							</ButtonSecondary>
							<ButtonGeneral type="submit">Send</ButtonGeneral>
						</div>
					</form>
				</div>
			</section>
		</Modal>
	);
};

export default VolunteerForm;
