import { ButtonGeneral, ButtonSecondary } from './Buttons';
import classes from './DonateForm.module.css';
import Modal from './Modal';

const DonateForm = () => {
	return (
		<Modal pos={'centre'}>
			<section className={classes.donate}>
				<h2 className={classes.header}>DONATE</h2>
				<div className={classes.body}>
					<p>
						We are in the process of setting up automatic payment methods but
						for now, let us contact you the traditional ways.{' '}
					</p>
					<p>Thank you for considering donating to us!</p>
					<form className={classes.form}>
						<label for="my-donor-name" className={classes.formLabel}>
							Name*
						</label>
						<input
							id="my-donor-name"
							className={`${classes.formInput} ${classes.formInputInvalid}`}
							type="text"
							name="name"
							required
						/>
						<div className={classes.feedbackInvalid}>
							Please provide your name.
						</div>

						<label for="my-donor-email" className={classes.formLabel}>
							Email address*
						</label>
						<input
							id="my-donor-email"
							className={`${classes.formInput} ${classes.formInputValid}`}
							type="email"
							name="email"
							required
						/>
						<div className={classes.feedbackValid}>
							Please provide your email address.
						</div>

						<label for="my-donor-phone" className={classes.formLabel}>
							Phone number (optional)
						</label>
						<input
							id="my-donor-phone"
							className={classes.formInput}
							type="tel"
							name="phone"
						/>

						<div className={classes.footer}>
							<ButtonSecondary>Cancel</ButtonSecondary>
							<ButtonGeneral type="submit">Send</ButtonGeneral>
						</div>
					</form>
				</div>
			</section>
		</Modal>
	);
};

export default DonateForm;
