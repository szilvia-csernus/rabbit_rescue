import { createSlice } from '@reduxjs/toolkit';

const volunteerFormSlice = createSlice({
	name: 'volunteerForm',
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

export const volunteerFormActions = volunteerFormSlice.actions;

export default volunteerFormSlice;
