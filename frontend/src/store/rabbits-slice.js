import { createSlice } from '@reduxjs/toolkit';

const rabbitsSlice = createSlice({
	name: 'rabbits',
	initialState: {
        rabbits: [],
        loading: true,
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        allRabbits(state, action) {
            state.rabbits = action.payload;
        },
        addRabbit(state, action) {
            state.rabbits.push(action.payload);
        },
        removeRabbit(state, action) {
            return state.rabbits.filter((rabbit) => rabbit.id !== action.payload);
        },
    }
});

export const rabbitsActions = rabbitsSlice.actions;

export default rabbitsSlice;
