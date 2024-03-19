import { createSlice } from '@reduxjs/toolkit';

const thanksVolunteerSlice = createSlice({
	name: 'thanksVolunteer',
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
