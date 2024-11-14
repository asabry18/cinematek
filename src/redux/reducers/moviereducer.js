import {allmovies, moviedetails} from '../type/allmovietype'

//all movies reducer
const initalmovievalue = {movies:[] , pageCount:0}
export const moviereducer = (state=initalmovievalue,action)=>{
    switch (action.type) {
        case allmovies:
            return{
                ...state,
                movies:action.data,
                pageCount:action.pages
            }
        default:
            return state;  
    }
}


//movie details reducer 
const initialState = {movieData: null,}
export const details = (state = initialState, action) => {
    switch (action.type) {
        case moviedetails:
            return { ...state, movieData: action.data }
        default:
            return state
    }
}