import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "Filters Slice",
    initialState: {
        value: [],
    },
    reducers: {
        resetFilters: (state, action) => {
            state.value = [];
        },
        setFilters: (state, action) => {
            if (action.payload.checked) {
                state.value.push(action.payload.category);
            } else {
                state.value.splice(
                    state.value.indexOf(action.payload.category),
                    1
                );
            }
        },
    },
});

// actions to manipulate data
export const { resetFilters, setFilters } = filtersSlice.actions;

// register into store
export default filtersSlice.reducer;
