import { createSlice } from '@reduxjs/toolkit';

const thanksVolunteerSlice = createSlice({
	name: 'ThanksVolunteer',
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

export const thanksVolunteerActions = thanksVolunteerSlice.actions;

export default thanksVolunteerSlice;
