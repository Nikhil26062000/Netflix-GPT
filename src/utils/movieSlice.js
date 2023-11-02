import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        }
    }
})

export const {addNowPlayingMovie,addMovieTrailer} = movieSlice.actions
export default movieSlice.reducer;