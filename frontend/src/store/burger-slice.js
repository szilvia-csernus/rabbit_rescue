import { createSlice } from '@reduxjs/toolkit';

const burgerSlice = createSlice({
	name: 'burger',
	initialState: false,
	reducers: {
		toggler(state) {
			return !state;
        },
		reset() {
			return false;
		},
	},
});

export const burgerActions = burgerSlice.actions;

export default burgerSlice;
