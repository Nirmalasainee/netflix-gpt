import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [[{original_title:'nirmala sitaraman',overview:'bad girl'}]],
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            return action.payload;
        }
    }
});

export const {addNowPlayingMovies} = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer