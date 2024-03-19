import { createSlice } from '@reduxjs/toolkit';

const enquiryFormSlice = createSlice({
	name: 'enquiryForm',
	initialState: {
		isOpen: false,
		activeRabbitGroupName: '',
		activeRabbitGroupImage: '',
	},
	reducers: {
		setActiveRabbitGroup(state, action) {
			state.activeRabbitGroupName = action.payload.name;
			state.activeRabbitGroupImage = action.payload.image;
		},
		openForm(state) {
			state.isOpen = true;
		},
		reset(state) {
			state.isOpen = false;
			state.activeRabbitGroupName = '';
			state.activeRabbitGroupImage = '';
		},
	},
});

export const enquiryFormActions = enquiryFormSlice.actions;

export default enquiryFormSlice;
