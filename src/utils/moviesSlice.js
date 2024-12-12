import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [[{original_title:'',overview:''}],[{addTrailerVideo: null}]],
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            return action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailerVideo} = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer