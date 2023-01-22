import { createSlice } from '@reduxjs/toolkit';


const donateFormSlice = createSlice({
	name: 'donateForm',
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

export const donateFormActions = donateFormSlice.actions;

export default donateFormSlice;
