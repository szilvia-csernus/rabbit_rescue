import classes from './Form.module.css';

import { useEffect, useState } from 'react';
import useInput from '../Hooks/use-input';
import { ButtonGeneral, ButtonSecondary } from './Buttons';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { thanksDonationActions } from '../store/thanks-donation-slice';
import { send } from '../store/form-action-creator';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) =>
	/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);

const DonateForm = () => {

	const [formValid, setFormValid] = useState(false);
	const [phoneNr, setPhoneNr] = useState('');
	const dispatch = useDispatch();
	
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

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			nameBlurHandler();
			emailBlurHandler()
			return;
		}

		nameReset();
		emailReset();
		setPhoneNr('');
		dispatch(thanksDonationActions.reset());
		send(dispatch, {
			name: nameValue,
			email: emailValue,
			phone: phoneNr
		});
	};
	
	const cancelClickHandler = (event) => {
		event.preventDefault();
		dispatch(thanksDonationActions.reset());
	}
	
	useEffect(() => {
		if (nameIsValid && emailIsValid) {
			setFormValid(true);
		} 
		return () => setFormValid(false)
	}, [nameIsValid, emailIsValid]);

	

	const nameClassNames = `${classes.formInput} ${
		nameHasError && classes.formInputInvalid
	}`;
	const emailClassNames = `${classes.formInput} ${
		emailHasError && classes.formInputInvalid
	}`;

	return (
		<Modal pos={'centre'}>
			<section className={classes.content}>
				<h2 className={classes.header}>DONATE</h2>
				<div className={classes.body}>
					<p>
						We are in the process of setting up automatic payment methods but
						for now, let us contact you the traditional ways.
					</p>
					<p>Thank you for considering donating to us!</p>
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
							formNoValidate
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
							formNoValidate
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

						<div className={classes.footer}>
							<ButtonSecondary onClick={cancelClickHandler}>Cancel</ButtonSecondary>
							<ButtonGeneral type="submit">Send</ButtonGeneral>
						</div>
					</form>
				</div>
			</section>
		</Modal>
	);
};

export default DonateForm;
