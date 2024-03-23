// email service provided by https://www.emailjs.com/
import emailjs from '@emailjs/browser';

import { thanksVolunteerActions } from './thanks-volunteer-slice';
import { errorMessageActions } from './error-message-slice';

// this action creator sends the form data with emailJS and initiates
// either the 'THANK YOU' or the 'Error' modal.
export const send = async (dispatch, formParams, form, enquiry_purpose) => {
	emailjs.init('sZPW9YDqBsCM52fA-');
	const result = await emailjs
		.send('my-emailjs-service', 'universal-template', {
			project_name: 'Rabbit rescue project',
			form: form,
			enquiry_purpose: enquiry_purpose,
			name: formParams.name,
			email: formParams.email,
			phone: formParams.phone,
			message: formParams.message,
		})
		.then(
			(response) => {
				if (response.status === 200) {
					dispatch(thanksVolunteerActions.open())
				} else {
					dispatch(errorMessageActions.open())
				}
			},
			(error) => {
				dispatch(errorMessageActions.open());
			}
		);
	return result;
};


