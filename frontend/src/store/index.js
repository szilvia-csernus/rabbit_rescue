import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from './burger-slice';
import thanksDonationSlice from './thanks-donation-slice';
import volunteerFormSlice from './volunteer-form-slice';
import thanksVolunteerSlice from './thanks-volunteer-slice';
import errorMessageSlice from './error-message-slice';
import rabbitsSlice from './rabbits-slice';
import enquiryFormSlice from './enquiry-form-slice';

const store = configureStore({
	reducer: {
		rabbits: rabbitsSlice.reducer,
		burger: burgerSlice.reducer,
		enquiryForm: enquiryFormSlice.reducer,
		thanksDonation: thanksDonationSlice.reducer,
		volunteerForm: volunteerFormSlice.reducer,
		thanksVolunteer: thanksVolunteerSlice.reducer,
		errorMessage: errorMessageSlice.reducer,
	},
});

export default store;
