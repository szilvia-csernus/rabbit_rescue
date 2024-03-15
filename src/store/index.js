import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from './burger-slice';
import thanksDonationSlice from './thanks-donation-slice';
import volunteerFormSlice from './volunteer-form-slice';
import thanksVolunteerSlice from './thanks-volunteer-slice';
import errorMessageSlice from './error-message-slice';

const store = configureStore({
	reducer: {
		burger: burgerSlice.reducer,
		thanksDonation: thanksDonationSlice.reducer,
		volunteerForm: volunteerFormSlice.reducer,
		thanksVolunteer: thanksVolunteerSlice.reducer,
		errorMessage: errorMessageSlice.reducer,
	},
});

export default store;
