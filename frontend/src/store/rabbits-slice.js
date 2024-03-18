import { createSlice } from '@reduxjs/toolkit';

const rabbitsSlice = createSlice({
	name: 'rabbits',
	initialState: [],
    reducers: {
        allRabbits(state, action) {
            return action.payload;
        },
        addRabbit(state, action) {
            state.push(action.payload);
        },
        removeRabbit(state, action) {
            return state.filter((rabbit) => rabbit.id !== action.payload);
        },
    }
});

export const rabbitsActions = rabbitsSlice.actions;

export default rabbitsSlice;
