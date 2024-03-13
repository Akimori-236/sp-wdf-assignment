import { createSlice } from "@reduxjs/toolkit";

const entitiesSlice = createSlice({
    name: "Entities Slice",
    initialState: {
        value: [
            // PLACEHOLDERS
            { id: "ee797cbf03", category: "abc", pinned: false },
            { id: "e97e2f4658", category: "abc", pinned: false },
            { id: "4qRbUEcQbf", category: "abc", pinned: false },
            { id: "dycFkWoVMf", category: "abc", pinned: false },
            { id: "GYwIrKyIeq", category: "abc", pinned: false },
            { id: "pCqwD4zDbf", category: "abc", pinned: false },
            { id: "5Z5t5tkG0d", category: "abc", pinned: false },
        ],
    },
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
            console.info(state.value);
        },
        remove: (state, action) => {
            state.value = state.value.filter(
                (entity) => !action.payload.includes(entity.id)
            );
        },
        update: (state, action) => {
            const id = action.payload.id;
            // find index of entity with id
            const index = state.value.findIndex((entity) => entity.id === id);
            // update entity at index
            state.value[index].category = action.payload.category;
        },
        pin: (state, action) => {
            const id = action.payload.id;
            const index = state.value.findIndex((entity) => entity.id === id);
            if (
                state.value.filter((entity) => entity.pinned === true).length <
                5
            ) {
                state.value[index].pinned = true;
            } else {
                alert("You can only pin 5 entities at a time");
            }
        },
        unpin: (state, action) => {
            const id = action.payload.id;
            const index = state.value.findIndex((entity) => entity.id === id);
            state.value[index].pinned = false;
        },
    },
});

// actions to manipulate data
export const { add, remove, update, pin, unpin } = entitiesSlice.actions;

// register into store
export default entitiesSlice.reducer;
