import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: [],
        addTrailerVideo:[],
        addPopularMovies:[]
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.addNowPlayingMovies=action.payload;
            state.addTrailerVideo = action.payload[0]
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.addPopularMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies} = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer