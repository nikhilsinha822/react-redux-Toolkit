import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tiago' },
    { id: '1', name: 'João' },
    { id: '2', name: 'Maria' },
    { id: '3', name: 'José' }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;