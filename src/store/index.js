import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from './burger-slice';
import donateFormSlice from './donate-form-slice';
import volunteerFormSlice from './volunteer-form-slice';
import thankYouMessageSlice from './thank-you-message-slice';
import errorMessageSlice from './error-message-slice';

const store = configureStore({
	reducer: {
		burger: burgerSlice.reducer,
		donateForm: donateFormSlice.reducer,
		volunteerForm: volunteerFormSlice.reducer,
		thankYouMessage: thankYouMessageSlice.reducer,
		errorMessage: errorMessageSlice.reducer,
	},
});

export default store;
