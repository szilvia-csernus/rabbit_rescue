import { createSlice } from '@reduxjs/toolkit';


const thanksDonationSlice = createSlice({
	name: 'thanksDonation',
	initialState: false,
	reducers: {
		open() {
			return true;
		},
		reset() {
			return false;
		},
	},
});

export const thanksDonationActions = thanksDonationSlice.actions;

export default thanksDonationSlice;
