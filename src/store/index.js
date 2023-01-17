import { configureStore } from '@reduxjs/toolkit';
import burgerSlice from './burger-slice';

const store = configureStore({
	reducer: {
		burger: burgerSlice.reducer,
	},
});

export default store;
