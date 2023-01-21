import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from './burger-slice';
import donateFormSlice from './donate-form-slice';

const store = configureStore({
	reducer: {
		burger: burgerSlice.reducer,
		donateForm: donateFormSlice.reducer
	},
});

export default store;
