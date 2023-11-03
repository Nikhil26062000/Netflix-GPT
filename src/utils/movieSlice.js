import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        trendingMovies:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovie:(state,action)=>{
            state.upComingMovies = action.payload;
        },
        addTrendingMovie:(state,action)=>{
            state.trendingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovie,addMovieTrailer,addPopularMovie, addTopRatedMovie,addUpComingMovie,addTrendingMovie} = movieSlice.actions
export default movieSlice.reducer;